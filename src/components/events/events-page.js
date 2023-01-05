import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventsPageComponent = ({ data }) => {
  return (
    <div className='events_page'>
      {data?.map(event => {
        return (
          <div className='card'>
            <Link href={`/events/${event.id}`} key={event.id}>
              <Image width={300} height={450} src={event.image} alt="location image" />

              <h2>{event.title}</h2>


            </Link>
          </div>

        )
      })}

    </div>
  )
}

export default EventsPageComponent