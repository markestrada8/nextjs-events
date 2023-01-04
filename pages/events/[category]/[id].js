import Image from 'next/image'
import React from 'react'

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json')

  const allPaths = allEvents.map(event => {
    return {
      params: {
        category: event.city,
        id: event.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  // console.log(context)
  const { allEvents } = await import('/data/data.json')
  const id = context?.params.id
  const eventData = allEvents.find(event => id === event.id)

  return {
    props: {
      data: eventData
    }
  }
}

const EventPage = ({ data }) => {

  return (
    <div>

      <Image width={900} height={600} src={data.image} alt="location image" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}

export default EventPage