
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <a href="#" className="z-50 mb-8 block">
              <img
                src="https://www.hovercontent.com/wp-content/uploads/2025/06/logo_hovercontent-v1-white.svg"
                alt="Hover Content Logo"
                className="h-7"
              />
            </a>
            <p className="text-gray-400 mb-4 max-w-md">
              Revolucione seu WordPress com IA. Crie conteúdo automático em minutos 
              e multiplique sua produtividade.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 HoverContent. Todos os direitos reservados.
            </div>
          </div>
          
          <div>
            
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:contato@hovercontent.com" className="hover:text-white transition-colors">contato@hovercontent.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Feito com ❤️ para criadores de conteúdo que querem ir além</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
