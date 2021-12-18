import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import FavoritesContext from '../../store/favorites-context'




const Navigation = () => {
  const context = useContext(FavoritesContext)
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
            <NavLink to='/favorites'>
              <span className='badge'>{context.totalFavorites}</span>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navigation
