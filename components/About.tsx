import { FaStar, FaHandshake, FaAward } from 'react-icons/fa'

const features = [
  {
    icon: FaStar,
    title: 'Kvalitet',
    description: 'Vi använder enbart material av högsta kvalitet och lever upp till branschens krav.',
  },
  {
    icon: FaHandshake,
    title: 'Pålitlighet',
    description: 'Vi håller det vi lovar – tidsplaner, budgetar och kvalitetsstandarder.',
  },
  {
    icon: FaAward,
    title: 'Erfarenhet',
    description: 'Över 10 år i branschen ger oss erfarenheten att hantera alla typer av projekt.',
  },
]

export default function About() {
  return (
    <section id="om-oss" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Om Projektgaranti Stockholm AB
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Vi är ett etablerat byggföretag i Stockholmsområdet med lång erfarenhet av renovering och
            ombyggnation. Våra erfarna hantverkare levererar kvalitetsarbete med garanti. Vi hjälper
            dig från planering till färdigt projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center p-6 md:p-8 rounded-xl bg-card-bg hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-5">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
