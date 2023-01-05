import EventCategory from '../../.././src/components/events/event-category'
import React from 'react'

export async function getStaticProps(context) {
  const { all_events } = await import('/data/data.json')
  const id = context?.params.category

  const data = all_events.filter(event => event.city === id)

  return {
    props: { data: data, pageName: id }
  }
}

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')
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

const CityEventPage = ({ data, pageName }) => <EventCategory data={data} pageName={pageName} />

export default CityEventPage