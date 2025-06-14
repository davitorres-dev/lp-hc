
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Zap, LogIn, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  const navigationItems = [
    { id: 'recursos', label: 'Recursos' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'demonstracao', label: 'Demonstração' },
    { id: 'precos', label: 'Preços' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="z-50">
            <img
              src="https://www.hovercontent.com/wp-content/uploads/2025/06/logo_hovercontent-v1.svg"
              alt="Hover Content Logo"
              className="h-8"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleSmoothScroll(item.id)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/minha-conta"}
              className="flex items-center space-x-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Button>
            <Button 
              onClick={() => window.location.href = "/?add-to-cart=65"}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSmoothScroll(item.id)}
                    className="text-left text-lg text-gray-600 hover:text-purple-600 transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      window.location.href = "/minha-conta";
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 w-full"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Button>
                  <Button 
                    onClick={() => {
                      window.location.href = "/?add-to-cart=65";
                      setIsOpen(false);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full">
                    Começar Agora
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
