import React, { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetuplist/MeetupList'


const FavoritesPage = () => {
  const context = useContext(FavoritesContext)
  let ismeetupFavorite;

  if (context.totalFavorites === 0) {
    ismeetupFavorite = <p>No Favorites</p>
  } else {
    ismeetupFavorite = <MeetupList meetups={context.favorites} />

  }
  return (
    <div>
      <h1>My Favorites</h1>
      {ismeetupFavorite}
    </div>
  )
}

export default FavoritesPage
