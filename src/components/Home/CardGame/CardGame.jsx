import { Link } from 'react-router-dom';
import './CardGame.css';

const CardGame = ({ link, img, alt }) => {
  return (
    <Link to={link}>
      <img src={img} alt={alt}></img>
    </Link>
  );
};

export default CardGame;
