import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Janelas e Portas em PVC | WINDAYPVC",
  description:
    "Soluções de alta qualidade em janelas e portas PVC que combinam isolamento térmico e acústico superior com design moderno e durabilidade excepcional.",
  keywords: [
    "janelas pvc",
    "portas pvc",
    "isolamento térmico",
    "isolamento acústico",
    "eficiência energética",
    "janelas cortizo",
  ],
  openGraph: {
    title: "Janelas e Portas em PVC | WINDAYPVC",
    description:
      "Soluções de alta qualidade em janelas e portas PVC que combinam isolamento térmico e acústico superior com design moderno e durabilidade excepcional.",
    url: "https://windaypvc.pt/produtos/pvc",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/pvc/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Janelas e Portas em PVC | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function PVCPage() {
  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/bdp39ygwgelrxs2b8lwm"
            alt="Janelas e Portas em PVC"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Janelas e Portas em PVC</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Soluções de alta qualidade que combinam isolamento térmico e acústico superior com design moderno e
            durabilidade excepcional.
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

      {/* Rest of the content remains unchanged */}
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">
            Benefícios das Janelas e Portas em PVC
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Isolamento Superior</h3>
              <p className="text-[#493F0B]/80">
                Redução significativa de ruídos externos e melhor eficiência térmica, proporcionando economia de energia
                de até 30% em climatização.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Durabilidade Excepcional</h3>
              <p className="text-[#493F0B]/80">
                Resistentes à corrosão, não desbotam e não requerem pintura, mantendo sua aparência e funcionalidade por
                mais de 50 anos com manutenção mínima.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Sustentabilidade</h3>
              <p className="text-[#493F0B]/80">
                Material 100% reciclável e com excelente eficiência energética, reduzindo a pegada de carbono da sua
                residência e contribuindo para um planeta mais sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[#d3d3d3]/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#493F0B] mb-4">Calidad CORTIZO PVC</h2>
            <p className="text-[#493F0B]/80 max-w-2xl mx-auto">
              Descubra a excelência e qualidade dos perfis CORTIZO PVC que utilizamos em nossas janelas e portas,
              garantindo o máximo desempenho, durabilidade e eficiência energética.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tyro2m9wbl0"
                title="Calidad CORTIZO PVC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">Nossas Categorias</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">
            Oferecemos uma ampla gama de janelas e portas em PVC para atender às suas necessidades específicas,
            combinando funcionalidade, estética e eficiência energética.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* A70 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 p-4">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gt6bprxdoaadcjadfonh"
                  alt="Janela A70"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">A70</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Sistema de perfil com 70mm de profundidade e 5 câmaras, oferecendo excelente isolamento térmico e
                  acústico para janelas e portas de batente.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Uw até 0,9 W/m²K</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Vidro até 40mm</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Isolamento acústico até 46dB</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* C70 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 p-4">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gsjiz9rvlilfz1tw9g1s"
                  alt="Janela C70"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">C70</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Sistema de correr com 70mm de profundidade, ideal para grandes vãos com excelente isolamento e
                  facilidade de operação.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Uw até 1,3 W/m²K</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Vidro até 28mm</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Sistema de rolamentos de alta qualidade</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* Corredora Enlevável */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/loz4eb5is806pdlyjvpb"
                  alt="Corredora Enlevável"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Corredora Enlevável</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Sistema premium para grandes vãos, com mecanismo de elevação que permite operação suave mesmo em
                  portas de grandes dimensões.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Vãos até 6m de largura</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Vidro até 40mm</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Estanqueidade superior</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* Janela Projetante */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/ht4xsfin0ipe9b2wd9qj"
                  alt="Janela Projetante"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Janela Projetante</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Sistema que permite a abertura parcial da janela para ventilação, mantendo a segurança e proteção
                  contra chuva.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Ventilação controlada</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Múltiplas posições de abertura</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Ideal para banheiros e cozinhas</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* E 170 de Correr Elevável */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 p-4">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/tfpz2lfqt81ushrgdllk"
                  alt="E 170 de Correr Elevável"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">E 170 de Correr Elevável</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Sistema premium de alta performance com 170mm de profundidade, combinando o máximo isolamento térmico
                  com a funcionalidade de correr elevável para grandes vãos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Uw até 0,7 W/m²K com 7 câmaras de isolamento</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Vãos até 6,5m com vidros até 52mm</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Operação suave com opção de motorização</span>
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

      {/* CLASSE+ Certification Section */}
      <section className="py-16 bg-[#493F0B]/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/w3vuoxbsply4va6k7vzb"
                alt="Certificação CLASSE+"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#493F0B] mb-6">Certificação CLASSE+</h2>
              <p className="text-lg mb-6 leading-relaxed text-[#493F0B]/80">
                Os nossos produtos têm o CLASSE+, uma iniciativa da ADENE para facilitar a escolha de produtos
                energeticamente eficientes na reabilitação de edifícios. A etiqueta visa preencher a lacuna da ausência
                de uma etiqueta europeia obrigatória para produtos como janelas, isolamentos e tintas, que influenciam o
                desempenho energético dos edifícios, oferecendo aos consumidores uma referência simples e clara para
                soluções mais eficientes.
              </p>

              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#493F0B] mb-3">Janelas PVC</h3>
                  <p className="text-[#493F0B]/80">
                    As janelas em PVC melhoram o isolamento térmico e acústico, aumentando a eficiência energética da
                    casa. Para ajudar na escolha, entre em contato com a WINDAYPVC.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#493F0B] mb-3">Portas PVC</h3>
                  <p className="text-[#493F0B]/80">
                    Nosso catálogo de portas exteriores em PVC oferece uma grande diversidade de modelos e soluções. Na
                    WINDAYPVC, comercializamos portas em PVC aos melhores preços do mercado, garantindo sua satisfação.
                  </p>
                </div>
              </div>

              <Link href="/contacto" className="mt-8 inline-block">
                <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white mt-6">Pedir Orçamento</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua casa?</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco hoje mesmo para um orçamento gratuito e descubra como nossas janelas e portas em
            PVC podem melhorar o conforto, a eficiência energética e o valor da sua propriedade.
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
