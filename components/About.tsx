'use client'

import { FaUsers, FaShieldAlt, FaClipboardCheck } from 'react-icons/fa'

type Feature = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const features: Feature[] = [
  {
    title: 'Erfarna hantverkare',
    description:
      'Vårt team består av skickliga yrkespersoner med lång erfarenhet inom bygg och renovering.',
    icon: FaUsers,
  },
  {
    title: 'Kvalitetsgaranti',
    description:
      'Vi levererar alltid arbete av hög kvalitet och lämnar garanti på våra projekt.',
    icon: FaShieldAlt,
  },
  {
    title: 'Från start till mål',
    description:
      'Vi hjälper dig genom hela processen från planering och design till färdig renovering.',
    icon: FaClipboardCheck,
  },
]

export default function About() {
  return (
    <section id="om-oss" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Om Projektgaranti Stockholm AB
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-[#B23A48]" />

          <p className="mt-6 text-lg text-gray-600">
            Vi är ett etablerat byggföretag i Stockholmsområdet med lång erfarenhet av renovering och ombyggnation. 
            Våra erfarna hantverkare levererar kvalitetsarbete med garanti. 
            Vi hjälper dig från planering till färdigt projekt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B23A48]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}