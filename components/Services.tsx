import { FaBath, FaUtensils, FaHome, FaPaintRoller, FaLayerGroup, FaClipboardList } from 'react-icons/fa'

const services = [
  {
    icon: FaBath,
    title: 'Badrumsrenovering',
    description: 'Totalrenovering av badrum med moderna lösningar och hög standard.',
  },
  {
    icon: FaUtensils,
    title: 'Köksrenovering',
    description: 'Drömköket med funktionell design och smarta lösningar.',
  },
  {
    icon: FaHome,
    title: 'Totalrenovering',
    description: 'Helrenovering av lägenheter och hus – från golv till tak.',
  },
  {
    icon: FaPaintRoller,
    title: 'Målning',
    description: 'Professionell målning invändigt och utvändigt med hög kvalitet.',
  },
  {
    icon: FaLayerGroup,
    title: 'Golvläggning',
    description: 'Trä, klinker, vinyl – alla typer av golv med precision och stil.',
  },
  {
    icon: FaClipboardList,
    title: 'ROT-avdrag & Projektledning',
    description: 'Vi hjälper dig med ROT-avdrag och sköter hela projektledningen.',
  },
]

export default function Services() {
  return (
    <section id="tjanster" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Våra tjänster
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av renoveringstjänster för att möta dina behov.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon
                    className="text-primary group-hover:text-white transition-colors duration-300"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
