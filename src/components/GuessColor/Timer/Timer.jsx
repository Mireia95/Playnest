import './Timer.css'
import useTimer from '../../../hooks/useTimer'

const Timer = ({ dispatch }) => {
  const { time } = useTimer({
    gameOverFunction: () => {
      dispatch({ type: 'SET_GAMEOVER' })
    }
  })

  return (
    <div className='timer'>
      <p>Time: {time} sec</p>
    </div>
  )
}

export default Timer
