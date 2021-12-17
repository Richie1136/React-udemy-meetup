import React, { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => { },
  removeFavorite: (meetupId) => { },
  isItemFavorite: (meetupId) => { }
})
export const FavoritesContextProvider = ({ children }) => {

  const [userFavorites, setUserFavorites] = useState([])

  const handleAddFavorite = (favoriteMeetup) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }

  const handleRemoveFavorite = (meetupId) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
    })

  }

  const itemIsFavorite = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isItemFavorite: itemIsFavorite
  }
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
