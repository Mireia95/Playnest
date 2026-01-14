import './Card.css';

const Card = ({ card, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      <img src={card.img} alt={card.alt} />
    </div>
  );
};

export default Card;
