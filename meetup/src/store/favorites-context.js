import React, { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
})
export const FavoritesContextProvider = ({ children }) => {
  return (
    <FavoritesContext.Provider>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
