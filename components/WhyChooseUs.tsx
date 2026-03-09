'use client'

import { FaAward, FaHandshake, FaTools } from 'react-icons/fa'

type Value = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const values: Value[] = [
  {
    title: 'Kvalitet',
    description:
      'Vi använder enbart material av högsta kvalitet och lever upp till branschens krav.',
    icon: FaAward,
  },
  {
    title: 'Pålitlighet',
    description:
      'Vi håller det vi lovar och arbetar med tydlig kommunikation, fasta processer och hög service.',
    icon: FaHandshake,
  },
  {
    title: 'Erfarenhet',
    description:
      'Med lång erfarenhet i branschen kan vi hantera både små och stora renoveringsprojekt med trygghet.',
    icon: FaTools,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="varfor-vi" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Varför välja oss
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-[#B23A48]" />

          <p className="mt-6 text-lg text-gray-600">
            Vi levererar hög kvalitet, tydlig kommunikation och trygga renoveringslösningar från start till mål.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="rounded-xl bg-white p-10 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B23A48]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}