import React from 'react'
import NewMeetupForm from '../components/newmeetupform/NewMeetupForm'
import { useNavigate } from 'react-router-dom'

const NewMeetupsPage = () => {
  const navigate = useNavigate()
  const handleAddMeetup = (meetupData) => {
    fetch('https://react-meetups-175c9-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      Headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      navigate('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  )
}

export default NewMeetupsPage
