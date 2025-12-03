import { useEffect, useState } from 'react'
import './Timer.css'

const Timer = ({ dispatch }) => {
  const [time, setTime] = useState(30)

  useEffect(() => {
    if (time <= 0) {
      dispatch({ type: 'SET_GAMEOVER' })
      return
    }

    const interval = setInterval(() => {
      setTime(time - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <div className='timer'>
      <p>Time: {time} sec</p>
    </div>
  )
}

export default Timer
