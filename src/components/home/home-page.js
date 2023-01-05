import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = ({ data }) => {
  return (
    <main className='home_body'>
      <h1>Events</h1>
      {data?.map(event =>
      (<div key={event.id}>
        <Link href={`/events/${event.id}`} >
          <div className='card'>
            <div className='image'>
              <Image width={200} height={300} src={event.image} alt="location image" />
            </div>
            <div className='content'>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        </Link>
      </div>)
      )}
    </main>
  )
}

export default HomePage