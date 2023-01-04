import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = ({ data }) => {
  return (
    <main >
      <h1>Events</h1>
      {data?.map(event =>
      (<div key={event.id}>
        <Link href={`/events/${event.id}`}>
          <Image width={300} height={300} src={event.image} alt="location image" />
          <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      </div>)
      )}
    </main>
  )
}

export default HomePage