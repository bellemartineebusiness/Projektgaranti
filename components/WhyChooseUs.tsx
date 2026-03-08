import { FaCheckCircle, FaPercentage, FaHardHat, FaMapMarkerAlt } from 'react-icons/fa'

const reasons = [
  {
    icon: FaCheckCircle,
    title: 'Kvalitetsgaranti',
    description: 'Vi står för vårt arbete med garanti. Är du inte nöjd, åtgärdar vi det.',
  },
  {
    icon: FaPercentage,
    title: 'ROT-avdrag',
    description: 'Vi hjälper dig med ROT-avdrag – spara upp till 50% på arbetskostnaden.',
  },
  {
    icon: FaHardHat,
    title: 'Erfarna hantverkare',
    description: 'Över 10 års erfarenhet i branschen ger dig trygghet i varje projekt.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Lokalt i Stockholm',
    description: 'Vi finns i Stockholmsområdet och är snabbt på plats när du behöver oss.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Varför välja oss?
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto">
            Vi sätter kunden i centrum och levererar resultat som överträffar förväntningarna.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="text-center bg-white bg-opacity-10 rounded-xl p-6 md:p-7 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-5">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-red-100 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
