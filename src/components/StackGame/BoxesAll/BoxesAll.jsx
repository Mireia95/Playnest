import Box from '../Box/Box'
import './BoxesAll.css'

const BoxesAll = ({ dispatch, boxes, xSpeed }) => {
  return (
    <>
      {boxes.map((box) => {
        return <Box box={box} xSpeed={xSpeed} />
      })}
    </>
  )
}

export default BoxesAll
