import React, { useContext } from 'react'
import Card from '../card/Card'
import './MeetupItem.css'
import FavoritesContext from '../../store/favorites-context'


const MeetupItem = ({ title, image, address, description, id }) => {
  const context = useContext(FavoritesContext)

  const itemIsFavorite = context.isItemFavorite(id)
  const toggleFavoriteStatus = () => {
    if (itemIsFavorite) {
      context.removeFavorite(id)
    } else {
      context.addFavorite({
        id, title, description, address, image
      })
    }
  }


  return (
    <>
      <li className='item'>
        <Card>
          <div className='image'>
            <img src={image} alt={title} />
          </div>
          <div className='content'>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          <div className='actions'>
            {<button onClick={toggleFavoriteStatus}>To Favorites</button>}
          </div>
        </Card>
      </li>
    </>
  )
}

export default MeetupItem