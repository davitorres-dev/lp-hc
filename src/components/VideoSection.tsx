
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section id="demonstracao" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Veja o HoverContent em Ação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assista como nosso plugin transforma URLs em artigos completos em segundos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Play className="w-8 h-8 text-purple-600 ml-1" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Demonstração Interativa
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Veja como gerar conteúdo automático a partir de qualquer URL em menos de 30 segundos
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Play className="w-4 h-4 mr-2" />
                  Assistir Demonstração
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Cole a URL</h4>
              <p className="text-gray-600 text-sm">Insira qualquer URL de artigo, notícia ou conteúdo</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">IA Processa</h4>
              <p className="text-gray-600 text-sm">Nossa IA analisa e extrai o conteúdo automaticamente</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Artigo Pronto</h4>
              <p className="text-gray-600 text-sm">Receba um artigo completo, otimizado e pronto para publicar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
