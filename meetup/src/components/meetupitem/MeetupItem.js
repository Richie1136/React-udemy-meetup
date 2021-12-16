import React from 'react'
import './MeetupItem.css'

const MeetupItem = ({ title, image, address, description }) => {
  return (
    <li className='item'>
      <div className='image'>
        <img src={image} alt={title} />
      </div>
      <div className='content'>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className='actions'>
        <button>To Favorites</button>
      </div>
    </li>
  )
}

export default MeetupItem