
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Blogger de Tecnologia",
    content: "O HoverContent transformou minha produtividade! Agora consigo criar artigos de qualidade em minutos ao invés de horas. A IA entende perfeitamente o contexto e gera conteúdo relevante.",
    rating: 5
  },
  {
    name: "Ana Silva",
    role: "Gerente de Marketing Digital",
    content: "Impressionante como o plugin consegue extrair informações e transformar em artigos bem estruturados. Nossa equipe aumentou a produção de conteúdo em 300%.",
    rating: 5
  },
  {
    name: "Pedro Santos",
    role: "Proprietário de E-commerce",
    content: "Finalmente encontrei uma solução que realmente funciona! O HoverContent me permite manter meu blog sempre atualizado sem gastar horas escrevendo. Recomendo para todos.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como o HoverContent está transformando a vida de criadores de conteúdo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
