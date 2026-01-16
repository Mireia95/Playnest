import './Card.css'

const Card = ({ card, onClick, cardsFlipped, cardsMatched }) => {
  return (
    <div
      className={`card ${
        cardsFlipped.includes(card) || cardsMatched.includes(card) ? 'turn' : ''
      }`}
      onClick={onClick}
    >
      <div className='front-card'>
        <img src='/assets/MemoryGame/Interrogante.png'></img>
      </div>
      <div className='back-card'>
        <img src={card.img} alt={card.alt} />
      </div>
    </div>
  )
}

export default Card
