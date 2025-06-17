
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hover Content?
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Enquanto outros plugins apenas fazem uma coisa (ou fazem mal feito), o <strong>Hover Content</strong> foi 
            pensado especificamente para criadores de conteúdo que querem <strong>produtividade real</strong> sem 
            complicação.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Não é só mais um "plugin de IA" genérico. É uma <strong>solução completa</strong> que entende 
            suas necessidades: desde transformar links em artigos até gerar resumos que realmente fazem 
            sentido para seu público.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            A diferença? <strong>Simplicidade inteligente</strong>. Dois cliques e seu conteúdo está pronto. 
            Nada de configurações complexas, nada de resultados genéricos. Só conteúdo de qualidade, 
            no seu estilo, quando você precisar.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Comparação com Outros Plugins
            </h3>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2">
                    <TableHead className="text-left font-bold text-gray-900">Recurso</TableHead>
                    <TableHead className="text-center font-bold text-purple-600">Hover Content</TableHead>
                    <TableHead className="text-center font-bold text-gray-600">Outros Plugins</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Transformar URLs em artigos</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Resumos automáticos inteligentes</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Integração nativa WordPress</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-yellow-600 font-medium">Parcial</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Configuração simples (2 min)</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Suporte OpenRouter (modelos premium)</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Extração de conteúdo limpa</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-yellow-600 font-medium">Básico</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SEO otimizado automaticamente</TableCell>
                    <TableCell className="text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Preço justo</TableCell>
                    <TableCell className="text-center">
                      <span className="text-green-600 font-bold">R$97/ano</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-red-500 font-medium">R$200+ ou assinatura mensal</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseSection;
