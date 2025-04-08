import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ProductCardProps = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  pageUrl: string
}

function ProductCard({ id, title, description, imageSrc, imageAlt, pageUrl }: ProductCardProps) {
  return (
    <div id={id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <Link href={pageUrl} className="p-6 flex flex-col flex-grow hover:bg-gray-50 transition-colors">
        <h3 className="text-xl font-bold text-[#493F0B] mb-2">{title}</h3>
        <p className="text-[#493F0B]/70 mb-4 flex-grow">{description}</p>
        <div className="text-[#493F0B] flex items-center justify-start">
          Saiba Mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:rotate-45" />
        </div>
      </Link>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 bg-[#d3d3d3]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-4">Nossos Produtos</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">
            Descubra nossa linha completa de soluções para janelas e portas, combinando qualidade, eficiência e design
            moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PVC Card */}
          <ProductCard
            id="pvc"
            title="PVC"
            description="Janelas e portas em PVC de alta qualidade, com excelente isolamento térmico e acústico."
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/bdp39ygwgelrxs2b8lwm"
            imageAlt="Janelas e portas em PVC"
            pageUrl="/produtos/pvc"
          />

          {/* Estores Card */}
          <ProductCard
            id="estores"
            title="Estores"
            description="Estores modernos que proporcionam controle de luz, privacidade e proteção térmica."
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/ns48znw3ebtk304v7jfi"
            imageAlt="Estores modernos"
            pageUrl="/produtos/estores"
          />

          {/* Redes Mosquiteiras Card */}
          <ProductCard
            id="mosquiteiras"
            title="Redes Mosquiteiras"
            description="Proteção eficaz contra insetos sem comprometer a ventilação e a vista exterior."
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/lgwisn4lzdqcyixulg9y"
            imageAlt="Redes mosquiteiras"
            pageUrl="/produtos/mosquiteiras"
          />

          {/* Portadas Card */}
          <ProductCard
            id="portadas"
            title="Portadas"
            description="Portadas elegantes que oferecem segurança adicional e controle de luminosidade."
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/k9lkjk5nyhmef92erfem"
            imageAlt="Portadas"
            pageUrl="/produtos/portadas"
          />

          {/* Vedaluz Card */}
          <ProductCard
            id="vedaluz"
            title="Vedaluz"
            description="Sistemas de vedação que garantem o máximo de eficiência energética e conforto."
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/kp7boapk5e7cu4wewirm"
            imageAlt="Sistemas Vedaluz"
            pageUrl="/produtos/vedaluz"
          />
        </div>
      </div>
    </section>
  )
}
