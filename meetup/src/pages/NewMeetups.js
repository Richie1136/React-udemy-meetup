import React from 'react'
import NewMeetupForm from '../components/newmeetupform/NewMeetupForm'

const NewMeetupsPage = () => {
  const handleAddMeetup = (meetupData) => {

  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  )
}

export default NewMeetupsPage
