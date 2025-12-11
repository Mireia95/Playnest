import { MODES } from '../../../reducer/StackGame/reducer'
import './StartGame.css'

const StartGame = ({ dispatch }) => {
  return (
    <button
      className='start-stack-game'
      onClick={() => {
        console.log('hola')
        dispatch({ type: 'SET_MODE', payload: MODES.move })
      }}
    >
      Start
    </button>
  )
}

export default StartGame
