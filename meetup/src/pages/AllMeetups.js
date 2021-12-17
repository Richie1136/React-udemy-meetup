import React, { useState, useEffect } from 'react'
import MeetupList from '../components/meetuplist/MeetupList'


const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch('https://react-meetups-175c9-default-rtdb.firebaseio.com/meetups.json')
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setLoadedMeetups(data)
      })
  }, [])


  if (isLoading) {
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
