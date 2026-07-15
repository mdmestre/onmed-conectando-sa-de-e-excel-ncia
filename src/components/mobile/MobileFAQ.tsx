import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { mobileColors, EASE } from "./mobileTheme";

const faqs = [
  {
    q: "Como funciona a gestão da Onmedic?",
    a: "Assumimos toda a operação do seu consultório — recepção, agenda, financeiro, compras e manutenção — para que você foque exclusivamente nos pacientes.",
  },
  {
    q: "Quais profissionais podem fazer parte?",
    a: "Médicos, psicólogos, fisioterapeutas, nutricionistas e demais especialistas da saúde compatíveis com o modelo do ecossistema.",
  },
  {
    q: "Como é o processo para se tornar membro?",
    a: "Você agenda uma conversa, conhece a estrutura pessoalmente, define seu modelo dentro do ecossistema e começa a atender com a operação já pronta.",
  },
  {
    q: "O que está incluso na mensalidade?",
    a: "Infraestrutura completa, gestão administrativa e financeira, recepção, tecnologia integrada e suporte contínuo do nosso time.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Você conta com um time dedicado disponível para resolver qualquer questão operacional, administrativa ou tecnológica do dia a dia.",
  },
  {
    q: "Preciso contratar equipe própria?",
    a: "Não. A gestão de equipe e recepção já está incluída — você não precisa contratar, treinar ou administrar ninguém.",
  },
  {
    q: "Como a tecnologia ajuda na rotina?",
    a: "Sistemas integrados cuidam de agenda, prontuário e relatórios, simplificando cada processo sem exigir nada operacional de você.",
  },
  {
    q: "A Onmedic atende pacientes?",
    a: "A Onmedic estrutura e gerencia o ecossistema; o atendimento clínico é sempre conduzido diretamente por você, o profissional.",
  },
  {
    q: "Como funciona a comunidade?",
    a: "Membros do ecossistema trocam experiências, participam de eventos e constroem parcerias dentro de um ambiente de profissionais de alto padrão.",
  },
  {
    q: "Quais especialidades fazem parte do ecossistema?",
    a: "O ecossistema reúne médicos de diversas especialidades, psicólogos, fisioterapeutas, nutricionistas e outros profissionais da saúde.",
  },
];

const MobileFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-16">
      <span
        className="block mb-3 font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: mobileColors.green }}
      >
        Dúvidas frequentes
      </span>
      <h2
        className="leading-[1.2] mb-8"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: mobileColors.text }}
      >
        Perguntas que recebemos com frequência.
      </h2>

      <div className="flex flex-col">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="border-b border-black/[0.06]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full py-5 flex items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", fontWeight: 600, color: mobileColors.text }}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${mobileColors.blue}0D` }}
                >
                  <Plus className="w-4 h-4" strokeWidth={1.8} style={{ color: mobileColors.blue }} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-5 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: `${mobileColors.text}99` }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileFAQ;
