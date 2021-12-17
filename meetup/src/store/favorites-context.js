import React, { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
})
export const FavoritesContextProvider = ({ children }) => {

  const [userFavorites, setUserFavorites] = useState([])

  const handleAddFavorite = (favoriteMeetup) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }

  const handleRemoveFavorite = () => {

  }

  const itemIsFavorite = () => {

  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length
  }
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
