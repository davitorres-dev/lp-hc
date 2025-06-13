
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Link, 
  Filter, 
  Zap, 
  Search, 
  Settings 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resumos Automáticos com IA",
    description: "Gere excerpts perfeitos e meta descriptions otimizadas com um clique - ideal para aumentar CTR e engajamento"
  },
  {
    icon: Link,
    title: "Transforme URLs em Artigos",
    description: "Cole qualquer link e receba conteúdo original e estruturado em segundos, pronto para publicação"
  },
  {
    icon: Filter,
    title: "Extração Inteligente",
    description: "Tecnologia que remove anúncios e elementos irrelevantes, mantendo apenas o conteúdo essencial"
  },
  {
    icon: Zap,
    title: "API OpenRouter Integrada",
    description: "Acesso aos melhores modelos de IA (GPT-4, Claude e outros) com opções gratuitas e premium"
  },
  {
    icon: Search,
    title: "SEO Otimizado Automaticamente",
    description: "Conteúdo gerado com estrutura perfeita, títulos impactantes e palavras-chave estratégicas"
  },
  {
    icon: Settings,
    title: "Integração Nativa 100%",
    description: "Funciona perfeitamente no Gutenberg e editor clássico - sem curva de aprendizado!"
  }
];

const FeaturesSection = () => {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que Você Precisa para{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dominar a Criação de Conteúdo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos poderosos que transformam sua forma de criar conteúdo no WordPress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
