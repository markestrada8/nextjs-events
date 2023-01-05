import Image from 'next/image'
import React from 'react'

const EventCard = ({ data }) => {
  return (
    <div className='event_single_page'>
      <h1>{data.title}</h1>
      <Image width={900} height={600} src={data.image} alt="location image" />
      <p>{data.description}</p>
      <form
        // onSubmit={onSubmit} 
        className="email_registration"
      >
        <label> Get Registered for this event!</label>
        <input
          // ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  )
}

export default EventCard