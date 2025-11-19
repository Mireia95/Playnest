import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = ({ img, alt = '', text = '', path, className }) => {
  return (
    <Link className={className} to={path}>
      {img ? <img src={img} alt={alt} /> : null}
      <span> {text} </span>
    </Link>
  );
};

export default ButtonLink;
