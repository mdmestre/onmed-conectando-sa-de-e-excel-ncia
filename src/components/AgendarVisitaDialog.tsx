import { useState } from "react";
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
import { Building2, Armchair, Users, HeartHandshake } from "lucide-react";
import { toast } from "sonner";

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
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    isMedico: "",
    especialidade: "",
    areaInteresse: "",
    locacao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    const msg = encodeURIComponent(
      `Olá! Gostaria de agendar uma visita.\n\nNome: ${formData.nome}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\nMédico: ${formData.isMedico || "Não informado"}\nEspecialidade: ${formData.especialidade || "Não informada"}\nÁrea de interesse: ${formData.areaInteresse || "Não informada"}\nLocação: ${formData.locacao || "Não informada"}`
    );
    window.open(`https://wa.me/5534999999999?text=${msg}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
    onOpenChange(false);
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
                Preencha o formulário e nossa equipe entrará em contato.
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
            <Input
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => update("nome", e.target.value)}
              maxLength={100}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
              maxLength={255}
              required
            />
            <Input
              placeholder="Telefone"
              value={formData.telefone}
              onChange={(e) => update("telefone", e.target.value)}
              maxLength={20}
              required
            />

            {/* É médico? */}
            <div className="space-y-1.5">
              <Label className="text-sm text-muted-foreground">Você é médico?</Label>
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
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <Input
              placeholder="Qual sua especialização?"
              value={formData.especialidade}
              onChange={(e) => update("especialidade", e.target.value)}
              maxLength={100}
            />

            <Select
              value={formData.areaInteresse}
              onValueChange={(v) => update("areaInteresse", v)}
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
                Você está procurando locação de consultórios?
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
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full mt-2">
              Enviar
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgendarVisitaDialog;
