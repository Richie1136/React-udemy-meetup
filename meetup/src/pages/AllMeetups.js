import React, { useState } from 'react'
import MeetupList from '../components/meetuplist/MeetupList'


const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  fetch('https://react-meetups-175c9-default-rtdb.firebaseio.com/meetups.json')
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setLoadedMeetups(data)
    })

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  )
}

export default AllMeetupsPage
