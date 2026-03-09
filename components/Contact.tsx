'use client'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

type ContactItem = {
  title: string
  value: string
  icon: React.ComponentType<{ className?: string }>
}

const contactInfo: ContactItem[] = [
  {
    title: 'Adress',
    value: 'Stockholm, Sverige',
    icon: FaMapMarkerAlt,
  },
  {
    title: 'Telefon',
    value: '+46 70 740 1383',
    icon: FaPhoneAlt,
  },
  {
    title: 'Email',
    value: 'info@projektgaranti.se',
    icon: FaEnvelope,
  },
]

export default function Contact() {
  return (
    <section id="kontakt" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Kontaktinformation
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-[#B23A48]" />

          <p className="mt-6 text-lg text-gray-600">
            Kontakta oss för offert eller frågor om ditt projekt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {contactInfo.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B23A48]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.value}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}