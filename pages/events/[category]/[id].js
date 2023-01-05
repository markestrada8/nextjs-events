import EventCard from '../../../src/components/events/single-event'

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

const EventPage = ({ data }) => <EventCard data={data} />

export default EventPage