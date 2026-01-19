import './BackLink.css'
import { Link } from 'react-router-dom'

const BackLink = () => {
  return (
    <Link to='/' className='back-game'>
      <img src='/assets/home.svg' alt='back to game menu' />
    </Link>
  )
}

export default BackLink
