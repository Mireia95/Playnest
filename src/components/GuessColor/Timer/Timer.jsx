import { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {
  const [time, setTime] = useState(30)

  useEffect(() => {
    if (time <= 0) return
    //! if time is 0, update gameover = true

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
