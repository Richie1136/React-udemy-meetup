import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <header className='main-header'>
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>All Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/addmeetup'>Add Meetup</NavLink>
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
