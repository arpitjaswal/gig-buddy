import React from 'react'
import { TicketIcon, CurrencyDollarIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Event Ticket Bookings',
    description:
      'Book events seemlessly and as soon as they are available.',
    icon: TicketIcon
  ,
  },
  {
    name: 'P2P Resale',
    description:
      'Cannot go the event? No problem. You can sell your tickets to the ones who want to buy it.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Gig Buddies',
    description:
      'Find people who are interested in the same events as you.',
    icon: UserGroupIcon,
  },
  {
    name: 'Calender',
    description:
      'Can book in advance, as soon as the early bird hits our portal.',
    icon: CalendarIcon,
  },
]
export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">GIG BUDDY</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Unlock the Beat: Book, Resell, Chat. 
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Step into the Groove: Let Gig Buddy Be Your Ultimate Companion, Where the Thrills of Booking, the Ease of Reselling, and the Connection of Chatting Merge to Create Unmatched Moments of Excitement and Community!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}