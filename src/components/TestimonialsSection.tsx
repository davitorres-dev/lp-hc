
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Débora B.",
    role: "MojoBooks",
    content: "Eu gastava horas escrevendo resenhas e posts. Agora, com o Hover Content, tudo sai praticamente pronto com um clique. Salvou meu tempo e ainda aumentou o engajamento no site.",
    rating: 5
  },
  {
    name: "Bruno V.",
    role: "SoulGeek",
    content: "Tenho um blog geek com atualizações quase diárias. O plugin simplesmente mudou minha rotina. É rápido, inteligente e deixa o conteúdo com a minha cara. Vale cada centavo!",
    rating: 5
  },
  {
    name: "Elias T.",
    role: "Evirtua",
    content: "Trabalho com WordPress há anos e nunca vi nada tão prático. A IA escreve bem, entende o contexto do site e ainda consigo editar tudo antes de publicar. Super recomendo.",
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
