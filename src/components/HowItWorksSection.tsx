
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Settings,
    title: "Configuração Rápida (2 min)",
    description: "Insira sua chave OpenRouter gratuita e ative o plugin"
  },
  {
    number: "2",
    icon: Zap,
    title: "Geração Inteligente",
    description: "Cole URLs ou clique no botão de resumo após escrever"
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Publique e Cresça!",
    description: "Revise o conteúdo gerado e publique - sem estresse!"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como Revolucionar Seu{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Fluxo de Conteúdo em 3 Passos
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
          
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                {/* Número do passo */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
