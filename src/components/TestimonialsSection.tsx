import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Rafael Mendonça",
        specialty: "Cardiologista • CRM-MG 48.291",
        text: "A OnMed resolveu o que mais me travava no início da carreira: ter estrutura hospitalar sem precisar bancar tudo sozinho. Hoje atendo com tranquilidade e foco total no paciente.",
        initial: "RM",
        color: "bg-primary",
    },
    {
        name: "Dra. Camila Andrade",
        specialty: "Dermatologista • CRM-MG 55.703",
        text: "O sistema de agendamento e o repasse automático me poupam horas toda semana. A localização dentro do hospital passa credibilidade imediata para os pacientes.",
        initial: "CA",
        color: "bg-secondary",
    },
    {
        name: "Psic. Bruno Tavares",
        specialty: "Psicólogo • CRP-04 38.192",
        text: "As salas têm o isolamento acústico necessário para sessões. Infraestrutura impecável, atendimento da equipe excelente. Não consigo imaginar atender em outro lugar.",
        initial: "BT",
        color: "bg-primary",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        O que dizem os profissionais
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Quem já atende na OnMed sabe a diferença que faz ter estrutura
                        hospitalar com gestão inteligente.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-card border border-border rounded-xl p-8 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <Quote className="w-7 h-7 text-primary/30" />

                            <p className="text-foreground/80 leading-relaxed text-sm flex-1">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <div
                                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                                >
                                    {t.initial}
                                </div>
                                <div>
                                    <span className="font-semibold text-foreground text-sm block">
                                        {t.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {t.specialty}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
