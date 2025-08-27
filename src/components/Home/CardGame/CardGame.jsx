import { Link } from 'react-router-dom';
import './CardGame.css';

const CardGame = ({ link, img, alt }) => {
  return (
    <Link to={link} className='card-game'>
      <div className='flex'>
        <img src={img} alt={alt}></img>
      </div>
    </Link>
  );
};

export default CardGame;
