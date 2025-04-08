import { Lightbulb, Palette, Shield, Clock, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BenefitsSection() {
  return (
    <section id="vantagens" className="py-20 bg-[#e5e5e5]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Por Que </span>
            <span className="text-[#493F0B]">Escolher-nos</span>
          </h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">
            Nossas janelas e portas oferecem uma combinação única de qualidade, eficiência e design. Conheça os
            principais benefícios que fazem da WINDAYPVC a escolha ideal para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">Eficiência energética</h3>
                <p className="text-gray-700">
                  As janelas com perfil Cortizo ajudam a manter o calor no inverno e o frescor no verão, reduzindo os
                  custos de aquecimento e ar condicionado.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Palette size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">Estilo e design</h3>
                <p className="text-gray-700">
                  Uma ampla variedade de cores e elementos decorativos permite escolher janelas que se integram
                  perfeitamente em qualquer interior.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">Segurança</h3>
                <p className="text-gray-700">
                  O perfil Cortizo oferece um alto nível de proteção contra intrusões, tornando as nossas janelas uma
                  escolha segura para a sua casa ou escritório.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">Durabilidade</h3>
                <p className="text-gray-700">
                  Graças ao uso de tecnologias e materiais modernos, as nossas janelas mantêm as suas propriedades
                  durante décadas.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 5 - Full width on mobile, centered on desktop */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2 md:max-w-2xl md:mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Settings size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">Abordagem personalizada</h3>
                <p className="text-gray-700">
                  Oferecemos a fabricação de janelas em qualquer forma e tamanho, tendo em conta os seus desejos e as
                  características do espaço.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/contacto">
            <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-6 py-3">Pedir Orçamento</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
