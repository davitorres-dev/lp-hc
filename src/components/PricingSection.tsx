
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield } from "lucide-react";

const features = [
  "Ativação em até 10 sites WordPress",
  "Todos os recursos premium liberados",
  "Atualizações constantes",
  "Templates personalizáveis",
  "Configuração avançada por site"
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white mb-4 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Promoção por Tempo Limitado! 50% OFF
          </Badge>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Oferta Exclusiva:{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Licença Premium
            </span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            
            <CardHeader className="text-center pb-6">
              <Badge className="self-center bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-4">
                Mais Popular
              </Badge>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Licença para 10 Sites
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-x-2">
                <span className="text-2xl text-gray-400 line-through">R$197</span>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      R$97
                    </span>
                    <span className="text-gray-600">/ano</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.location.href = "/?add-to-cart=65"}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base py-6 mb-4 sm:text-lg"
                size="lg"
              >
                Começar Agora - R$97/ano
              </Button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-red-600 font-medium">
            ⚡ ÚLTIMA CHANCE - PREÇO PROMOCIONAL
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
