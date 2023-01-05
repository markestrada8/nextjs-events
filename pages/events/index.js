import EventsPageComponent from '../.././src/components/events/events-page'
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
      <h1>Events</h1>
      <EventsPageComponent data={data} />
    </div>
  )
}

export default EventsPage


