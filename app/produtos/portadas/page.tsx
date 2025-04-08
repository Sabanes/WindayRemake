import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portadas | WINDAYPVC",
  description:
    "Soluções elegantes que oferecem segurança adicional e controle de luminosidade, valorizando a estética da sua fachada enquanto protegem seu interior.",
  keywords: [
    "portadas",
    "portadas pvc",
    "portadas alumínio",
    "segurança residencial",
    "controle de luminosidade",
    "fachada residencial",
  ],
  openGraph: {
    title: "Portadas | WINDAYPVC",
    description:
      "Soluções elegantes que oferecem segurança adicional e controle de luminosidade, valorizando a estética da sua fachada enquanto protegem seu interior.",
    url: "https://windaypvc.pt/produtos/portadas",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/portadas/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portadas | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function PortadasPage() {
  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/k9lkjk5nyhmef92erfem"
            alt="Portadas elegantes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto max-w-7xl relative z-10 px-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-white/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para página inicial
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Portadas</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Soluções elegantes que oferecem segurança adicional e controle de luminosidade, valorizando a estética da
            sua fachada enquanto protegem seu interior.
          </p>
          <div className="mt-8">
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-white text-white hover:text-[#493F0B] border border-white hover:border-[#493F0B] px-6 py-2">
                Pedir Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">Benefícios das Portadas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Segurança Reforçada</h3>
              <p className="text-[#493F0B]/80">
                Barreira adicional contra intrusões, aumentando a segurança de sua casa ou negócio com sistemas de
                trancamento robustos e materiais resistentes a impactos.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Controle de Luz</h3>
              <p className="text-[#493F0B]/80">
                Regulagem precisa da entrada de luz natural, protegendo móveis e decoração contra os raios solares e
                criando ambientes mais confortáveis em dias de forte insolação.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Valor Estético</h3>
              <p className="text-[#493F0B]/80">
                Valorização da fachada com designs elegantes que complementam a arquitetura de sua casa, disponíveis em
                diversos estilos, cores e acabamentos para se adequar a qualquer projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/k9lkjk5nyhmef92erfem"
                alt="Portadas de alta qualidade"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#493F0B] mb-6">Características Premium</h2>
              <p className="text-lg mb-8 leading-relaxed text-[#493F0B]/80">
                Nossas portadas são fabricadas com os melhores materiais e tecnologias disponíveis, garantindo
                durabilidade, funcionalidade e beleza para sua residência ou negócio.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Materiais de Alta Qualidade</h3>
                    <p className="text-[#493F0B]/80">
                      Fabricadas com alumínio de alta resistência ou PVC reforçado, oferecendo durabilidade excepcional
                      e resistência às intempéries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Sistemas de Trancamento Avançados</h3>
                    <p className="text-[#493F0B]/80">
                      Equipadas com fechaduras e travas de segurança que oferecem proteção adicional contra tentativas
                      de arrombamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Personalização Completa</h3>
                    <p className="text-[#493F0B]/80">
                      Disponíveis em diversos estilos, cores e acabamentos para se adequar perfeitamente à estética da
                      sua casa e às suas necessidades específicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Isolamento Adicional</h3>
                    <p className="text-[#493F0B]/80">
                      Proporcionam uma camada extra de isolamento térmico e acústico, contribuindo para o conforto
                      interior e a eficiência energética da sua casa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Valorize e proteja sua casa</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            Nossas portadas combinam segurança, funcionalidade e beleza para transformar sua casa. Entre em contato hoje
            mesmo para um orçamento gratuito.
          </p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              Solicitar Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
