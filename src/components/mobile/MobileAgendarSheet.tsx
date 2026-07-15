import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { mobileColors, EASE } from "./mobileTheme";

interface MobileAgendarSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const areaOptions = [
  { value: "gestao", label: "Gestão completa" },
  { value: "infraestrutura", label: "Infraestrutura" },
  { value: "comunidade", label: "Comunidade e networking" },
  { value: "tecnologia", label: "Tecnologia" },
];

const locacaoOptions = ["Sim", "Não", "Estou avaliando"];

const inputStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.95rem",
  color: mobileColors.text,
} as const;

const labelStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: `${mobileColors.text}80`,
} as const;

const MobileAgendarSheet = ({ open, onOpenChange }: MobileAgendarSheetProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    isMedico: "",
    especialidade: "",
    areaInteresse: "",
    locacao: "",
  });

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    update("telefone", value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      toast.error("Preencha os campos obrigatórios: nome, e-mail e telefone.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("agendamentos").insert([
      {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: formData.telefone.trim(),
        is_medico: formData.isMedico || null,
        especialidade: formData.especialidade.trim() || null,
        area_interesse: formData.areaInteresse || null,
        locacao: formData.locacao || null,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Supabase error:", error);
      toast.error("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
      return;
    }

    onOpenChange(false);
    navigate("/obrigado");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-[90] bg-black/40"
            onClick={() => !loading && onOpenChange(false)}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-x-0 bottom-0 z-[95] rounded-t-[28px] flex flex-col"
            style={{ background: mobileColors.offWhite, height: "92vh" }}
          >
            {/* Alça + fechar */}
            <div className="flex-shrink-0 pt-3 pb-1 flex flex-col items-center relative">
              <span className="w-10 h-1 rounded-full bg-black/10" />
              <button
                onClick={() => onOpenChange(false)}
                aria-label="Fechar"
                className="absolute right-5 top-3 w-9 h-9 rounded-full bg-black/[0.04] flex items-center justify-center"
              >
                <X className="w-4 h-4" strokeWidth={1.8} style={{ color: mobileColors.text }} />
              </button>
            </div>

            {/* Conteúdo rolável */}
            <form
              id="mobile-agendar-form"
              onSubmit={handleSubmit}
              className="flex-1 min-h-0 overflow-y-auto px-6 pt-3 pb-6 flex flex-col gap-5"
            >
              <div>
                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", color: mobileColors.text }}
                >
                  Conheça a estrutura Onmedic
                </h2>
                <p className="mt-1.5 leading-relaxed" style={{ ...inputStyle, fontSize: "0.85rem", color: `${mobileColors.text}80` }}>
                  Preencha o formulário e nossa equipe entrará em contato em até 24h.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Nome completo *</label>
                <input
                  placeholder="Ex: Dr. João Silva"
                  value={formData.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  maxLength={100}
                  required
                  disabled={loading}
                  className="w-full h-[52px] px-4 rounded-2xl bg-white border border-black/[0.06] outline-none focus:border-[#0A4D8F] transition-colors"
                  style={inputStyle}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>E-mail *</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  maxLength={255}
                  required
                  disabled={loading}
                  className="w-full h-[52px] px-4 rounded-2xl bg-white border border-black/[0.06] outline-none focus:border-[#0A4D8F] transition-colors"
                  style={inputStyle}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="(34) 99999-9999"
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  required
                  disabled={loading}
                  className="w-full h-[52px] px-4 rounded-2xl bg-white border border-black/[0.06] outline-none focus:border-[#0A4D8F] transition-colors"
                  style={inputStyle}
                />
              </div>

              {/* É profissional de saúde? */}
              <div className="flex flex-col gap-2">
                <label style={labelStyle}>Você é profissional de saúde?</label>
                <div className="flex gap-3">
                  {["Sim", "Não"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      disabled={loading}
                      onClick={() => update("isMedico", opt)}
                      className="flex-1 h-11 rounded-full border font-semibold transition-colors"
                      style={{
                        ...inputStyle,
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        borderColor: formData.isMedico === opt ? mobileColors.blue : "rgba(0,0,0,0.08)",
                        background: formData.isMedico === opt ? `${mobileColors.blue}0F` : "white",
                        color: formData.isMedico === opt ? mobileColors.blue : mobileColors.text,
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Especialidade / área de atuação</label>
                <input
                  placeholder="Ex: Cardiologia, Psicologia..."
                  value={formData.especialidade}
                  onChange={(e) => update("especialidade", e.target.value)}
                  maxLength={100}
                  disabled={loading}
                  className="w-full h-[52px] px-4 rounded-2xl bg-white border border-black/[0.06] outline-none focus:border-[#0A4D8F] transition-colors"
                  style={inputStyle}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label style={labelStyle}>O que mais te interessa na Onmedic?</label>
                <div className="flex flex-wrap gap-2.5">
                  {areaOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      disabled={loading}
                      onClick={() => update("areaInteresse", opt.value)}
                      className="px-4 h-11 rounded-full border font-semibold transition-colors"
                      style={{
                        ...inputStyle,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        borderColor: formData.areaInteresse === opt.value ? mobileColors.blue : "rgba(0,0,0,0.08)",
                        background: formData.areaInteresse === opt.value ? `${mobileColors.blue}0F` : "white",
                        color: formData.areaInteresse === opt.value ? mobileColors.blue : mobileColors.text,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label style={labelStyle}>Já atua em consultório próprio?</label>
                <div className="flex flex-wrap gap-2.5">
                  {locacaoOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      disabled={loading}
                      onClick={() => update("locacao", opt)}
                      className="px-4 h-11 rounded-full border font-semibold transition-colors"
                      style={{
                        ...inputStyle,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        borderColor: formData.locacao === opt ? mobileColors.blue : "rgba(0,0,0,0.08)",
                        background: formData.locacao === opt ? `${mobileColors.blue}0F` : "white",
                        color: formData.locacao === opt ? mobileColors.blue : mobileColors.text,
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </form>

            {/* Rodapé fixo com envio */}
            <div className="flex-shrink-0 px-6 pt-4 pb-7 bg-gradient-to-t from-[#FAF9F7] via-[#FAF9F7] to-transparent">
              <button
                type="submit"
                form="mobile-agendar-form"
                disabled={loading}
                className="w-full h-14 rounded-full text-white font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform disabled:opacity-60"
                style={{ background: mobileColors.blue, fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Solicitar visita"
                )}
              </button>
              <p
                className="text-center mt-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: `${mobileColors.text}60` }}
              >
                Sem spam. Entraremos em contato em até 24h.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileAgendarSheet;
