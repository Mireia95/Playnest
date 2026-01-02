import './Card.css';

const Card = ({ card, increaseMoves = () => {} }) => {
  const onClick = () => {
    increaseMoves();
  };

  return (
    <div className='card' onClick={onClick}>
      <img src={card.img} alt={card.alt} />
    </div>
  );
};

export default Card;
