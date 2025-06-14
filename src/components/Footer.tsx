
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <a href="#" className="z-50">
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
              © 2024 HoverContent. Todos os direitos reservados.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reembolso</a></li>
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
