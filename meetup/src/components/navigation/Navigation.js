import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <header className='main-header'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>All Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/newmeetups'>New Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navigation
