import './BackLink.css';
import { Link } from 'react-router-dom';

const BackLink = () => {
  return (
    <Link to='/' className='back-game'>
      Back
    </Link>
  );
};

export default BackLink;
