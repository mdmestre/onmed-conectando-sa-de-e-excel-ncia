import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, Armchair, Users, HeartHandshake, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface AgendarVisitaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const destaques = [
  { icon: Building2, label: "Locação integral ou fracionada" },
  { icon: Armchair, label: "Mobiliados e prontos para atender" },
  { icon: Users, label: "Complexo com alto fluxo de pacientes" },
  { icon: HeartHandshake, label: "Serviços de suporte inclusos" },
];

const AgendarVisitaDialog = ({ open, onOpenChange }: AgendarVisitaDialogProps) => {
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

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0 gap-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left — highlights */}
          <div className="bg-muted/40 p-8 flex flex-col justify-center gap-6 border-r border-border">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold leading-tight">
                Conheça a estrutura OnMed
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm mt-1">
                Preencha o formulário e nossa equipe entrará em contato em até 24h.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {destaques.map((d) => (
                <div
                  key={d.label}
                  className="border border-border rounded-lg p-4 flex flex-col items-center text-center gap-2 bg-background"
                >
                  <d.icon className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium leading-tight">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-4">
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Nome completo *</Label>
              <Input
                placeholder="Ex: Dr. João Silva"
                value={formData.nome}
                onChange={(e) => update("nome", e.target.value)}
                maxLength={100}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">E-mail *</Label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={255}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Telefone / WhatsApp *</Label>
              <Input
                placeholder="(34) 9 9999-9999"
                value={formData.telefone}
                onChange={(e) => update("telefone", e.target.value)}
                maxLength={20}
                required
                disabled={loading}
              />
            </div>

            {/* É profissional de saúde? */}
            <div className="space-y-1.5">
              <Label className="text-sm text-muted-foreground">Você é profissional de saúde?</Label>
              <div className="flex gap-4">
                {["Sim", "Não"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="isMedico"
                      value={opt}
                      checked={formData.isMedico === opt}
                      onChange={(e) => update("isMedico", e.target.value)}
                      className="accent-primary"
                      disabled={loading}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Especialidade / área de atuação</Label>
              <Input
                placeholder="Ex: Cardiologia, Psicologia..."
                value={formData.especialidade}
                onChange={(e) => update("especialidade", e.target.value)}
                maxLength={100}
                disabled={loading}
              />
            </div>

            <Select
              value={formData.areaInteresse}
              onValueChange={(v) => update("areaInteresse", v)}
              disabled={loading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Área de interesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consultorio">Consultório</SelectItem>
                <SelectItem value="clinica">Clínica</SelectItem>
                <SelectItem value="coworking">Coworking médico</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>

            {/* Locação */}
            <div className="space-y-1.5">
              <Label className="text-sm text-muted-foreground">
                Procurando locação de consultório?
              </Label>
              <div className="flex gap-4 flex-wrap">
                {["Sim", "Não", "Estudando opções"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="locacao"
                      value={opt}
                      checked={formData.locacao === opt}
                      onChange={(e) => update("locacao", e.target.value)}
                      className="accent-primary"
                      disabled={loading}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Solicitar visita"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Sem spam. Entraremos em contato em até 24h.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgendarVisitaDialog;
