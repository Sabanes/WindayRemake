import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function MosquiteirasPage() {
  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/lgwisn4lzdqcyixulg9y"
            alt="Redes mosquiteiras"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Redes Mosquiteiras</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Proteção eficaz contra insetos sem comprometer a ventilação e a vista exterior, garantindo conforto e
            bem-estar para sua família.
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
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">Benefícios das Redes Mosquiteiras</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Proteção Contra Insetos</h3>
              <p className="text-[#493F0B]/80">
                Barreira eficaz contra mosquitos, moscas, abelhas e outros insetos, mantendo sua casa livre de pragas e
                reduzindo o risco de doenças transmitidas por vetores.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Ventilação Natural</h3>
              <p className="text-[#493F0B]/80">
                Permite a circulação de ar fresco enquanto mantém os insetos do lado de fora, reduzindo a necessidade de
                ar condicionado e melhorando a qualidade do ar interior.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Visibilidade Preservada</h3>
              <p className="text-[#493F0B]/80">
                Malha fina e discreta que não compromete a vista para o exterior, mantendo a conexão visual com o
                ambiente externo e a entrada de luz natural.
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
            Oferecemos diferentes tipos de redes mosquiteiras para atender às suas necessidades específicas, combinando
            funcionalidade, durabilidade e estética.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rede Fixa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Rede Fixa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Rede Fixa</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Solução permanente para janelas que não precisam ser abertas frequentemente, oferecendo proteção
                  contínua contra insetos com instalação simples.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Instalação simples e discreta</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Máxima proteção contra insetos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Solução econômica e durável</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* Rede Fixa Móvel */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7f34e92fa17?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Rede Fixa Móvel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Rede Fixa Móvel</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Combina a proteção de uma rede fixa com a praticidade de poder removê-la quando necessário, ideal para
                  limpeza ou acesso à janela.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Fácil remoção para limpeza</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Sistema de encaixe seguro</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Ideal para janelas de uso ocasional</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">Mais Informações</Button>
                </Link>
              </div>
            </div>

            {/* Rede Plissada */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Rede Plissada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">Rede Plissada</h3>
                <p className="text-[#493F0B]/80 mb-4">
                  Design moderno que se dobra como um acordeão, economizando espaço e oferecendo operação suave e
                  silenciosa, ideal para portas e grandes vãos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Design compacto e elegante</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Operação suave e silenciosa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">Ideal para portas e grandes vãos</span>
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
          <h2 className="text-3xl font-bold mb-6">Proteja sua casa contra insetos</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            Nossas redes mosquiteiras são a solução ideal para manter sua casa ventilada e livre de insetos. Solicite um
            orçamento gratuito e desfrute do conforto que você merece.
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
