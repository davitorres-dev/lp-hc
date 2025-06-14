import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=32&h=32&fit=crop&crop=center" 
                alt="HoverContent Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">HoverContent</span>
            </div>
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
