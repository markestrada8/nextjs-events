import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
// import { json } from 'stream/consumers'

const SingleEvent = ({ data }) => {
  const emailInput = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault()
    const email = emailInput.current.value
    const eventId = router?.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      setMessage('Please use a valid email address');
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, eventId: eventId })
      })
      if (!response.ok) {
        throw new Error('event form process error: ', response.status)
      }
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';


    } catch (error) {
      console.log('event form error: ', error)
    }

  }

  return (
    <div className='event_single_page'>
      <h1>{data.title}</h1>
      <Image width={900} height={600} src={data.image} alt="location image" />
      <p>{data.description}</p>
      <form
        onSubmit={submitHandler}
        className="email_registration"
      >
        <label htmlFor='email'> Get Registered for this event!</label>
        <input
          ref={emailInput}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default SingleEvent