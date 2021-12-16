import React from 'react'
import MeetupItem from '../meetupitem/MeetupItem'
import './MeetupList.css'

const MeetupList = ({ meetups }) => {
  return (
    <ul className='list'>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} id={meetup.id} title={meetup.title} image={meetup.image} address={meetup.address} description={meetup.description} />
      })}
    </ul>
  )
}

export default MeetupList