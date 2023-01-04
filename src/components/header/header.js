import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header>
      <div>
        <Image width={50} height={50} src={'/public/images/logo_black.png'} alt="location image" />
        <nav>
          <img src="" alt="" />
          <Link href="/" style={{ margin: '10px' }}>Home</Link>
          <Link href="/events" style={{ margin: '10px' }}>Events</Link>
          <Link href="/about-us" style={{ margin: '10px' }}>About Us</Link>
        </nav>
      </div>
      <h1>Next Events</h1>
    </header>
  )
}

export default Header