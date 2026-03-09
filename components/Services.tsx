'use client'

import React from 'react'
import {
  FaBath,
  FaUtensils,
  FaHammer,
  FaPaintRoller,
  FaThLarge,
  FaClipboardList,
} from 'react-icons/fa'

type Service = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Badrumsrenovering',
      description:
        'Totalrenovering av badrum med moderna lösningar och hög standard.',
      icon: FaBath,
    },
    {
      title: 'Köksrenovering',
      description:
        'Drömköket med funktionell design och smarta lösningar.',
      icon: FaUtensils,
    },
    {
      title: 'Totalrenovering',
      description:
        'Helrenovering av lägenheter och hus från golv till tak.',
      icon: FaHammer,
    },
    {
      title: 'Målning',
      description:
        'Professionell målning invändigt och utvändigt med hög kvalitet.',
      icon: FaPaintRoller,
    },
    {
      title: 'Golvläggning',
      description:
        'Trä, klinker, vinyl – alla typer av golv med precision och stil.',
      icon: FaThLarge,
    },
    {
      title: 'ROT-avdrag & Projektledning',
      description:
        'Vi hjälper dig med ROT-avdrag och sköter hela projektledningen.',
      icon: FaClipboardList,
    },
  ]

  return (
    <section id="tjanster" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Våra tjänster
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-[#B23A48]" />

          <p className="mt-6 text-lg text-gray-600">
            Vi erbjuder ett brett utbud av renoveringstjänster för att möta dina behov.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B23A48]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}