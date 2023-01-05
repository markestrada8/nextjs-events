import Image from 'next/image'
import logo from '/public/static/events-logo.png'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
          <Image width={100} height={100} src={logo} alt="location image" />
          <h1 className='title'>Next Events</h1>
          <nav>
            <ul>
              <li>
                <Link href="/" style={{ margin: '10px' }}>Home</Link>
              </li>
              <li>

                <Link href="/events" style={{ margin: '10px' }}>Events</Link>
              </li>
              <li>
                <Link href="/about-us" style={{ margin: '10px' }}>About Us</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header