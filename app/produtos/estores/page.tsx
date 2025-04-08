import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estores | WINDAYPVC",
  description:
    "Soluções modernas para controle de luz, privacidade e proteção térmica, combinando funcionalidade e design para qualquer ambiente.",
  keywords: [
    "estores",
    "estores térmicos",
    "estores exteriores",
    "estores interiores",
    "controle de luz",
    "proteção térmica",
  ],
  openGraph: {
    title: "Estores | WINDAYPVC",
    description:
      "Soluções modernas para controle de luz, privacidade e proteção térmica, combinando funcionalidade e design para qualquer ambiente.",
    url: "https://windaypvc.pt/produtos/estores",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/estores/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Estores | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function EstoresPage() {
  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/ns48znw3ebtk304v7jfi"
            alt="Estores modernos"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Estores</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Soluções modernas para controle de luz, privacidade e proteção térmica, combinando funcionalidade e design
            para qualquer ambiente.
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
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">Benefícios dos Estores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Controle de Luminosidade</h3>
              <p className="text-[#493F0B]/80">
                Ajuste preciso da entrada de luz natural, criando o ambiente ideal para cada momento do dia e protegendo
                móveis e decoração contra os danos dos raios UV.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Eficiência Energética</h3>
              <p className="text-[#493F0B]/80">
                Redução significativa da entrada de calor no verão e retenção do calor interno no inverno, contribuindo
                para a economia de energia em climatização durante todo o ano.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Privacidade e Segurança</h3>
              <p className="text-[#493F0B]/80">
                Controle total sobre a visibilidade do exterior para o interior, garantindo privacidade quando
                necessário e adicionando uma camada extra de segurança para sua residência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">Nossas Categorias</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">
            Oferecemos uma variedade de estores para atender às suas necessidades específicas de controle de luz,
            privacidade e eficiência energética.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Estores Térmicos */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/hsldbgz0gnrriikor4oz"
                  alt="Estores Térmicos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Estores Térmicos</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Projetados com materiais de alta densidade que proporcionam isolamento térmico superior, reduzindo a
                  transferência de calor através das janelas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Redução de até 40% na perda de calor</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Camada refletora de alumínio</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Ideal para climas extremos</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* Estores Exterior */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/bsuubmaj7fcfeqpimbjz"
                  alt="Estores Exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Estores Exterior</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Instalados na parte externa da janela, bloqueiam o calor antes que ele atinja o vidro, oferecendo
                  máxima eficiência térmica e proteção contra intempéries.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Bloqueio de até 90% do calor solar</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Resistentes a ventos fortes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Opção de motorização</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* Estores Interior */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/vm4rx3lf2lhonjgtypb5"
                  alt="Estores Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Estores Interior</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Soluções versáteis para controle de luz e privacidade, disponíveis em diversos materiais, cores e
                  estilos para complementar sua decoração.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Ampla variedade de tecidos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Fácil instalação e manutenção</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Opções blackout e translúcidas</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Melhore o conforto da sua casa</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            Nossos estores oferecem a combinação perfeita de funcionalidade, eficiência energética e estética. Solicite
            um orçamento gratuito e descubra como podemos transformar seus espaços.
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
