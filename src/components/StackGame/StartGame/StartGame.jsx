import { createNewBox } from '../../../reducer/StackGame/actions'
import './StartGame.css'

const StartGame = ({ dispatch, boxes, hueColorBox }) => {
  return (
    <button
      className='start-stack-game'
      onClick={() => {
        createNewBox({
          dispatch: dispatch,
          boxes: boxes,
          hueColorBox: hueColorBox
        })
      }}
    >
      Start
    </button>
  )
}

export default StartGame
