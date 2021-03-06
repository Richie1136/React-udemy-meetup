import React, { useRef } from 'react'
import './NewMeetupForm.css'
import Card from '../card/Card'

const NewMeetupForm = ({ onAddMeetup }) => {

  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()


  const handleSubmit = (event) => {
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }
    onAddMeetup(meetupData)
  }




  return (
    <Card>
      <form onSubmit={handleSubmit} className='form'>
        <div className='control'>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id="title" ref={titleInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id="image" ref={imageInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id="address" ref={addressInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='description'>Meetup Description</label>
          <textarea required id="Description" ref={descriptionInputRef} rows='5'></textarea>
        </div>
        <div className='actions'>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
