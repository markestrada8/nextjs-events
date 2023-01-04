import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')
  const id = context?.params.category

  const data = allEvents.filter(event => event.city === id)

  return {
    props: { data: data, pageName: id }
  }
}

export async function getStaticPaths() {
  const { events_categories } = await import('../../../data/data.json')
  const allPaths = events_categories.map(event => {
    return {
      params: {
        category: event.id.toString(),
      }
    }
  })

  // console.log(allPaths)
  return {
    paths: allPaths,
    fallback: false
  }
}

const CityEventPage = ({ data, pageName }) => {
  return (
    <div>

      <h1>Events in {pageName}</h1>
      <div>
        {data.map(event => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>

            <Image width={300} height={200} src={event.image} alt="location image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CityEventPage