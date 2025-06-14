
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    stat: "+10 Horas",
    description: "De economia Semanal"
  },
  {
    icon: TrendingUp,
    stat: "+37% Tráfego Orgânico",
    description: "Média de crescimento em 3 meses"
  },
  {
    icon: Users,
    stat: "3x Mais",
    description: "Publicações com a mesma equipe"
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
            Pronto para Multiplicar Sua{" "}
            <span className="text-yellow-300">Produtividade?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a <strong>547+ criadores de conteúdo</strong> que já:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold text-yellow-300 mb-2">
                  {item.stat}
                </div>
                <div className="text-blue-100">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="text-base px-5 sm:bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Comece Agora por R$19,90/mês
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-sm text-yellow-300 font-medium">
              ⚡ Preço sobe para R$39,90 após as primeiras 100 licenças!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
