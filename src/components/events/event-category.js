import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventCategory = ({ data, pageName }) => {
  return (
    <div className='event_category'>
      <h1>Events in {pageName}</h1>
      <div className='content'>
        {data.map(event => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`} className='card'>

            <Image width={300} height={200} src={event.image} alt="location image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventCategory