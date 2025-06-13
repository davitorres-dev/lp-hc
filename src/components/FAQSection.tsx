
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Há limite de gerações?",
    answer: "Não limitamos seu uso! O OpenRouter oferece até 1.000 requisições/dia gratuitas. Cada post completo consome 2 requisições, resumos apenas 1."
  },
  {
    question: "Por que apenas plano mensal?",
    answer: "Queremos democratizar o acesso à IA! Planos mensais são mais acessíveis e você cancela quando quiser sem taxas."
  },
  {
    question: "Funciona em hospedagem compartilhada?",
    answer: "Sim! Requer apenas WordPress 5.0+, PHP 7.4+ e conexão estável. (Evite hospedagens gratuitas com menos de 128MB RAM)"
  },
  {
    question: "Qual a qualidade do conteúdo gerado?",
    answer: "Usamos modelos de última geração (GPT-4, Claude, etc.) que produzem texto humano e otimizado. Você sempre controla e edita o resultado final."
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
