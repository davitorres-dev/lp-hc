
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Há limite de gerações?",
    answer: "Nosso plugin não impõe limite ao número de gerações de conteúdo com IA. No entanto, a plataforma de IA que utilizamos, o OpenRouter, estabelece algumas restrições para o uso de modelos gratuitos: contas sem créditos ou com menos de 10 créditos podem realizar até 50 requisições gratuitas por dia, enquanto contas com 10 créditos ou mais têm o limite ampliado para 1.000 requisições gratuitas por dia."
  },
  {
    question: "Por que apenas plano mensal?",
    answer: "Sabemos que muitos dos nossos clientes estão começando suas jornadas digitais, e entendemos que um investimento anual no Hover Content pode ser alto nesse momento inicial. Por isso, seguimos uma filosofia baseada em três princípios: acessibilidade, oferecendo apenas licenças mensais para facilitar o acesso ao produto; flexibilidade, permitindo que você cancele a qualquer momento, sem burocracias; e segurança, com uma garantia de 7 dias — se não estiver satisfeito, devolvemos seu dinheiro."
  },
  {
    question: "Funciona em hospedagem compartilhada?",
    answer: "Sim! Requer apenas WordPress 5.0+, PHP 7.4+ e conexão estável. (Evite hospedagens gratuitas com menos de 128MB RAM)"
  },
  {
    question: "Qual a qualidade do conteúdo gerado?",
    answer: "A qualidade do conteúdo gerado pode variar de acordo com o modelo de IA escolhido (como GPT-4, Claude, entre outros). Além disso, você pode personalizar o prompt conforme desejar, ajustando o estilo, o tom e o foco do conteúdo para atender melhor ao seu público. Isso garante mais controle sobre os resultados e permite criar textos realmente alinhados com seus objetivos."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o HoverContent
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
