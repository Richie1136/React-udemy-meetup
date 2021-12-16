import React, { useState } from 'react'
import './NewMeetupForm.css'
import Card from '../card/Card'

const NewMeetupForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredImage, setEnteredImage] = useState('')
  const [enteredAddress, setEnteredAddress] = useState('')
  const [enteredDescription, setEnteredDescription] = useState('')


  const handleTitleInput = (event) => {
    setEnteredTitle(event.target.value)
  }

  const handleAddressInput = (event) => {
    setEnteredAddress(event.target.value)
  }

  const handleDescriptionInput = (event) => {
    setEnteredDescription(event.target.value)
  }
  const handleImageInput = (event) => {
    setEnteredImage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const meetupData = {
    title: enteredTitle,
    image: enteredImage,
    address: enteredAddress,
    description: enteredDescription
  }

  console.log(meetupData)

  return (
    <Card>
      <form onSubmit={handleSubmit} className='form'>
        <div className='control'>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id="title" onChange={handleTitleInput} />
        </div>
        <div className='control'>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id="image" value={enteredImage} onChange={handleImageInput} />
        </div>
        <div className='control'>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id="address" value={enteredAddress} onChange={handleAddressInput} />
        </div>
        <div className='control'>
          <label htmlFor='description'>Meetup Description</label>
          <textarea required id="Description" value={enteredDescription} onChange={handleDescriptionInput} rows='5'></textarea>
        </div>
        <div className='actions'>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
