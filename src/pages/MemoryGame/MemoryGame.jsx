import { Link } from 'react-router-dom'
import InitGame from '../../components/MemoryGame/InitGame/InitGame'
import './MemoryGame.css'

const MemoryGame = () => {
  return (
    <>
      <InitGame />
      <Link className={'startButt'} to={'/memorygame/play'}>
        {' '}
        START{' '}
      </Link>
    </>
  )
}

export default MemoryGame
