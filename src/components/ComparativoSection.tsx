import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "Consultórios equipados",
    onmed: true,
    proprio: true,
    aluguel: false,
  },
  {
    label: "Recepção e atendimento ao paciente",
    onmed: true,
    proprio: "partial",
    aluguel: false,
  },
  {
    label: "Sistema de agendamento integrado",
    onmed: true,
    proprio: "partial",
    aluguel: false,
  },
  {
    label: "Gestão financeira automatizada",
    onmed: true,
    proprio: false,
    aluguel: false,
  },
  {
    label: "Biossegurança e normas hospitalares",
    onmed: true,
    proprio: "partial",
    aluguel: false,
  },
  {
    label: "Aceita particular e convênios",
    onmed: true,
    proprio: true,
    aluguel: "partial",
  },
  {
    label: "Localização dentro de hospital",
    onmed: true,
    proprio: false,
    aluguel: false,
  },
  {
    label: "Sem custo fixo alto de manutenção",
    onmed: true,
    proprio: false,
    aluguel: "partial",
  },
  {
    label: "Modelo flexível (hora/turno/mês)",
    onmed: true,
    proprio: false,
    aluguel: false,
  },
  {
    label: "Credibilidade hospitalar imediata",
    onmed: true,
    proprio: false,
    aluguel: false,
  },
];

type CellValue = boolean | "partial";

const Cell = ({ value }: { value: CellValue }) => {
  if (value === true)
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-secondary" />
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex justify-center">
        <Minus className="w-5 h-5 text-muted-foreground/60" />
      </div>
    );
  return (
    <div className="flex justify-center">
      <X className="w-5 h-5 text-destructive/50" />
    </div>
  );
};

const ComparativoSection = () => {
  return (
    <section id="comparativo" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              Comparativo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que a OnMed é a escolha certa
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Compare e veja o que você ganha ao escolher a OnMed em vez de
              montar um consultório próprio ou alugar um espaço avulso.
            </p>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-4 text-foreground font-semibold w-1/2">
                    O que está incluso
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      OnMed
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Consultório Próprio
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Aluguel Avulso
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {rows.map((row) => (
                  <tr
                    key={row.label}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-3.5 text-foreground/80">
                      {row.label}
                    </td>
                    <td className="px-6 py-3.5 bg-primary/5">
                      <Cell value={row.onmed as CellValue} />
                    </td>
                    <td className="px-6 py-3.5">
                      <Cell value={row.proprio as CellValue} />
                    </td>
                    <td className="px-6 py-3.5">
                      <Cell value={row.aluguel as CellValue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legenda */}
          <div className="flex items-center gap-6 mt-4 justify-center text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-secondary" /> Incluso
            </span>
            <span className="flex items-center gap-1.5">
              <Minus className="w-3.5 h-3.5 text-muted-foreground/60" /> Parcial / depende
            </span>
            <span className="flex items-center gap-1.5">
              <X className="w-3.5 h-3.5 text-destructive/50" /> Não incluso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparativoSection;

