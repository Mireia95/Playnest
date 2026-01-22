import React from 'react'
import './Card.css'

const Card = React.memo(({ card, onClick, isTurned }) => {
  console.log('soy Card y me renderizo')

  const handleClick = () => {
    if (!isTurned) {
      onClick(card)
    }
  }

  return (
    <div className={`card ${isTurned ? 'turned' : ''}`} onClick={handleClick}>
      <div className='card-div'>
        <div className='front-card'>
          <img src='/assets/MemoryGame/Interrogante.png'></img>
        </div>
        <div className='back-card'>
          <img src={card.img} alt={card.alt} />
        </div>
      </div>
    </div>
  )
})

export default Card
