import SingleEvent from '../../../src/components/events/single-event'

export async function getStaticPaths() {
  const { all_events } = await import('/data/data.json')

  const allPaths = all_events.map(event => {
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
  const { all_events } = await import('/data/data.json')
  const id = context?.params.id
  const eventData = all_events.find(event => id === event.id)

  return {
    props: {
      data: eventData
    }
  }
}

const EventPage = ({ data }) => <SingleEvent data={data} />

export default EventPage