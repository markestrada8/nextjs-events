import Image from 'next/image'
import React from 'react'

export async function getStaticProps(context) {
  const { allEvents } = await import('../../../data/data.json')
  const id = context?.params.category

  const data = allEvents.filter(event => event.city === id)

  return {
    props: { data: data }
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

const CityEventPage = ({ data }) => {
  return (
    <div>
      <h1>Events in {data[0].city.charAt(0).toUpperCase() + data[0].city.slice(1)}</h1>
      <div>
        {data.map(event => (
          <a key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image width={300} height={200} src={event.image} alt="location image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default CityEventPage