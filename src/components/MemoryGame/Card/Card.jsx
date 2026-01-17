import './Card.css'

const Card = ({ card, onClick, cardsFlipped, cardsMatched }) => {
  let isTurned = cardsFlipped.includes(card) || cardsMatched.includes(card)

  const handleClick = () => {
    if (!isTurned) {
      onClick()
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
}

export default Card
