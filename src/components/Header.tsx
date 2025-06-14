
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
          <a href="#" className="z-50">
            <img
              src="https://www.hovercontent.com/wp-content/uploads/2025/06/logo_hovercontent-v1.svg"
              alt="Hover Content Logo"
              className="h-10"
            />
          </a>
          
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

          <Button 
            onClick={() => window.location.href = "/?add-to-cart=65"}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
