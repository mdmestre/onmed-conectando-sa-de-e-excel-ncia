import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

const Obrigado = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
            {/* Card central */}
            <div className="max-w-lg w-full text-center">
                {/* Ícone de sucesso */}
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-secondary" />
                    </div>
                </div>

                {/* Mensagem principal */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    Solicitação recebida!
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-3">
                    Nossa equipe recebeu sua solicitação de visita e entrará em contato
                    em breve para confirmar a data e horário.
                </p>
                <p className="text-sm text-muted-foreground mb-10">
                    Verifique sua caixa de e-mail — podemos entrar em contato por lá
                    também.
                </p>

                {/* Separador */}
                <div className="border-t border-border mb-10" />

                {/* Contatos diretos */}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-6">
                    Prefere falar agora?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="https://wa.me/5534984253885"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        WhatsApp (34) 98425-3885
                    </a>
                    <a
                        href="mailto:gerencia@onmedcis.com.br"
                        className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-muted transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        gerencia@onmedcis.com.br
                    </a>
                </div>

                {/* Endereço */}
                <div className="flex items-start justify-center gap-2 text-sm text-muted-foreground mb-10">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-left">
                        Rua Rafael Marino Neto, 600 — 1º andar, Sala 182<br />
                        Jardim Karaíba · Uberlândia – MG
                    </span>
                </div>

                {/* Voltar */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar ao início
                </Link>
            </div>
        </div>
    );
};

export default Obrigado;
