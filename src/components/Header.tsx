
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              HoverContent
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleSmoothScroll('recursos')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => handleSmoothScroll('como-funciona')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => handleSmoothScroll('demonstracao')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Demonstração
            </button>
            <button 
              onClick={() => handleSmoothScroll('precos')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => handleSmoothScroll('faq')}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
