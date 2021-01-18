import { SwipeableDrawer } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
    },
    {
      name: 'Jeff Bezos',
      url:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
    },
    {
      name: 'Sundar Pichai',
      url:
        'http://t1.gstatic.com/images?q=tbn:ANd9GcT17VEsX9bVFgj4eYKewZBZ0pKb1dBhMeJuTOcXVxSkrHe0Fwd0',
    },
    {
      name: 'Bill Gates',
      url:
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_1185999101_20001333200092800_443629.jpg',
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log('removing:' + nameToDelete)
    // setLastdirection(direction)
  }
  const outOfFrame = (name) => {
    console.log(name + 'left the screen!')
  }
  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
