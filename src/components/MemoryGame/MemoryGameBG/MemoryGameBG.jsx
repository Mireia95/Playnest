import { Outlet } from 'react-router-dom'
import './MemoryGameBG.css'

const MemoryGameBG = () => {
  return (
    <div id='memorygame' className='flex'>
      <Outlet />
    </div>
  )
}

export default MemoryGameBG
