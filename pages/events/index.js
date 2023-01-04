import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function getStaticProps() {
  const { events_categories } = await import('../../data/data.json')
  // console.log(events_categories)
  return {
    props: {
      data: events_categories
    }
  }
}


const EventsPage = ({ data }) => {
  return (
    <div>

      <h1>Events Page</h1>
      <div>
        {data.map(event => {
          return (
            <div key={event.id}>
              <Link href={`/events/${event.id}`}>
                <Image width={200} height={300} src={event.image} alt="location image" />
                <div>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                </div>
              </Link>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default EventsPage


