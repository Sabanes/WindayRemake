import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Shield, Zap, Thermometer, Building2, Building, Microscope } from "lucide-react"

export default function VedaluzPage() {
  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Sistemas Vedaluz"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Vedaluz</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Sistemas avançados de vedação que garantem o máximo de eficiência energética e conforto para sua casa ou
            escritório, com tecnologia de ponta para isolamento superior.
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
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">Benefícios dos Sistemas Vedaluz</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Eficiência Energética</h3>
              <p className="text-[#493F0B]/80">
                Redução significativa nos custos de aquecimento e refrigeração graças ao excelente isolamento térmico,
                contribuindo para uma economia de até 40% na conta de energia.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Conforto Acústico</h3>
              <p className="text-[#493F0B]/80">
                Diminuição drástica dos ruídos externos, criando ambientes mais tranquilos e agradáveis com redução de
                até 45dB, ideal para áreas urbanas ou próximas a vias movimentadas.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">Vedação Total</h3>
              <p className="text-[#493F0B]/80">
                Proteção completa contra infiltrações de água, vento e poeira, garantindo ambientes mais limpos e
                saudáveis, além de prolongar a vida útil da estrutura da edificação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#493F0B] mb-6">Tecnologia Avançada</h2>
              <p className="text-lg mb-8 leading-relaxed text-[#493F0B]/80">
                Os sistemas Vedaluz utilizam tecnologia de ponta para garantir o máximo desempenho em isolamento térmico
                e acústico, com soluções inovadoras que se adaptam às suas necessidades específicas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Sistema Multicâmara</h3>
                    <p className="text-[#493F0B]/80">
                      Perfis com múltiplas câmaras de ar que criam barreiras térmicas eficientes, reduzindo
                      significativamente a transferência de calor entre ambientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Vedantes de Alta Performance</h3>
                    <p className="text-[#493F0B]/80">
                      Materiais elastoméricos de última geração que garantem vedação perfeita mesmo após anos de uso,
                      resistentes a variações de temperatura e radiação UV.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Ruptura de Ponte Térmica</h3>
                    <p className="text-[#493F0B]/80">
                      Tecnologia que interrompe a condução de calor através dos perfis, eliminando pontes térmicas e
                      garantindo isolamento superior em toda a estrutura.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">Compatibilidade com Vidros Especiais</h3>
                    <p className="text-[#493F0B]/80">
                      Sistemas projetados para acomodar vidros duplos e triplos com gases nobres e películas de baixa
                      emissividade, maximizando o desempenho térmico e acústico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Tecnologia Vedaluz"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">Aplicações</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">
            Os sistemas Vedaluz são versáteis e podem ser aplicados em diversos tipos de projetos, sempre garantindo o
            máximo desempenho em isolamento e eficiência energética.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#493F0B] w-16 h-16 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3 text-center">Residências de Alto Padrão</h3>
              <p className="text-[#493F0B]/80">
                Soluções premium para casas e apartamentos que buscam o máximo conforto térmico e acústico, com
                acabamento sofisticado e personalização completa.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#493F0B] w-16 h-16 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3 text-center">Edifícios Comerciais</h3>
              <p className="text-[#493F0B]/80">
                Sistemas robustos e eficientes para escritórios, lojas e hotéis, contribuindo para a redução de custos
                operacionais e criação de ambientes mais confortáveis.
              </p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#493F0B] w-16 h-16 rounded-full flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3 text-center">Ambientes Especiais</h3>
              <p className="text-[#493F0B]/80">
                Soluções específicas para hospitais, estúdios de gravação, salas de concerto e outros ambientes que
                exigem isolamento acústico e térmico excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Maximize o conforto e a eficiência da sua casa</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            Nossos sistemas Vedaluz oferecem o que há de mais avançado em tecnologia de isolamento. Entre em contato
            hoje mesmo para um diagnóstico personalizado e orçamento gratuito.
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
