import React, { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetuplist/MeetupList'


const FavoritesPage = () => {
  const context = useContext(FavoritesContext)
  return (
    <div>
      <h1>My Favorites</h1>
      <MeetupList meetups={context.favorites} />
    </div>
  )
}

export default FavoritesPage
