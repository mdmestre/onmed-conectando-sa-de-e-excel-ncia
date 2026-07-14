import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Rafael Mendonça",
        specialty: "Cardiologista • CRM-MG 48.291",
        text: "A Onmedic resolveu o que mais me travava no início da carreira: ter estrutura hospitalar sem precisar bancar tudo sozinho. Hoje atendo com tranquilidade e foco total no paciente.",
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
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[10.5px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                        O que dizem os profissionais
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-[0.97rem]">
                        Quem já atende na Onmedic sabe a diferença que faz ter estrutura
                        hospitalar com gestão inteligente.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="group bg-white border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-primary/25 hover:shadow-[0_16px_48px_-8px_hsl(207_79%_38%/0.14)] transition-all duration-400 hover:-translate-y-1"
                        >
                            {/* Stars + Quote */}
                            <div className="flex items-center justify-between">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <Quote className="w-6 h-6 text-primary/20" />
                            </div>

                            <p className="text-foreground/75 leading-relaxed text-[13.5px] flex-1 italic">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <div
                                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                                >
                                    {t.initial}
                                </div>
                                <div>
                                    <span className="font-semibold text-foreground text-[13.5px] block">
                                        {t.name}
                                    </span>
                                    <span className="text-[11px] text-muted-foreground/70">
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
