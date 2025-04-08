import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="sobre-nos" className="py-20 bg-[#493F0B] text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Somos especialistas na venda e instalação de janelas de metaloplástico com perfil Cortizo oferecendo
              soluções que combinam inovação, estética e eficiência energética para casas e negócios.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Mais de 10 anos de experiência no mercado</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Equipe técnica altamente qualificada</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Produtos com garantia e certificação de qualidade</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Compromisso com a satisfação do cliente</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contacto">
                <Button className="bg-[#d3d3d3] hover:bg-[#d3d3d3]/90 text-[#493F0B] px-8 py-6 rounded-md text-lg">
                  Pedir Orçamento
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/bfu0quslw322c3gboazm"
              alt="Sala moderna com grandes portas de vidro"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#493F0B]/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
