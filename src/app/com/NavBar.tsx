import Link from 'next/link'
import React from 'react'
import WeatherComponent from './WeatherComponent'


const NavBar = () => {
  return (
    <header>
      <div className='header'>
        <strong><Link href='/'><img src="/images/logo.png" alt="로고" /></Link></strong>
        <nav>
          <Link href='/about'>About</Link>
          <Link href='/skills'>Skills</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <WeatherComponent />
      </div>
    </header>
  )
}

export default NavBar