

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Economia de Tempo",
    description: "Automatize a criação de conteúdo e foque no que realmente importa"
  },
  {
    icon: Target,
    title: "Conteúdo de Qualidade",
    description: "IA otimizada para gerar artigos envolventes e relevantes"
  },
  {
    icon: Rocket,
    title: "Produtividade Máxima",
    description: "Publique mais conteúdo com a mesma equipe e recursos"
  }
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden relative">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforme Sua Estratégia de{" "}
            <span className="text-yellow-300">Conteúdo</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Descubra como o <strong>HoverContent</strong> pode revolucionar sua produção de conteúdo:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="text-xl font-bold text-yellow-300 mb-2">
                  {item.title}
                </div>
                <div className="text-blue-100">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Button
              onClick={() => window.location.href = "/?add-to-cart=65"}
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-base px-5 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 gap-0 sm:text-xl sm:px-12"
            >
              Comece Agora por R$97/ano
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-sm text-yellow-300 font-medium">
              ⚡ Preço sobe para R$197 após as primeiras 100 licenças!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

