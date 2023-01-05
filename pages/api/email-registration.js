import path from 'path'
import fs from 'fs'

const buildPath = () => {
  return path.join(process.cwd(), 'data', 'data.json')
}


const extractData = (filePath) => {
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export default function handler(req, res) {
  const { method } = req

  const filePath = buildPath()
  const { event_categories, all_events } = extractData(filePath)

  if (!all_events) {
    return res.status(404).json({
      message: 'No events found'
    })
  }

  if (method === "POST") {
    const { email, eventId } = req.body

    if (!email | !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    const newAllEvents = all_events.map(event => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(409).json({ message: 'Email is already registered' })
          return event
        }
        return {
          ...event, emails_registered: [...event.emails_registered, email]
        }
      }

      return event
    })
    fs.writeFileSync(filePath, JSON.stringify({ event_categories, all_events: newAllEvents }))
    res.status(201).json({ message: `${email} successfully registered for ${eventId}!` })
  }
}