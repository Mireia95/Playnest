import { createNewBox } from '../../../reducer/StackGame/actions'
import './StartGame.css'

const StartGame = ({ dispatch, boxes, xSpeed, hueColorBox }) => {
  return (
    <button
      className='start-stack-game'
      onClick={() => {
        createNewBox({
          dispatch: dispatch,
          boxes: boxes,
          hueColorBox: hueColorBox,
          xSpeed: xSpeed
        })
      }}
    >
      Start
    </button>
  )
}

export default StartGame
