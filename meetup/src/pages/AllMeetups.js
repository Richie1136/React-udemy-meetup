import React from 'react'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zion_Williamson_2020.jpg/800px-Zion_Williamson_2020.jpg',
    address: 'Some address 5, 32456',
    description: 'This the first'
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Jonathan_Taylor.png',
    address: 'Some address 15, 32456',
    description: 'This the second'
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aaron_Judge_2018.jpg/1920px-Aaron_Judge_2018.jpg',
    address: 'The address 15, 32456',
    description: 'This the third'
  }
]

const AllMeetupsPage = () => {
  return (
    <div>
      <h1>All Meetups</h1>
      {DUMMY_DATA.map((data => {
        return (
          <>
            <h2>{data.title}</h2>
            <img src={data.image} />
          </>
        )
      }))}
    </div>
  )
}

export default AllMeetupsPage
