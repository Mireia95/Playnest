import Box from '../Box/Box'
import './BoxesAll.css'

const BoxesAll = ({ dispatch, boxes }) => {
  return (
    <>
      {boxes.map((box) => {
        return <Box box={box} />
      })}
    </>
  )
}

export default BoxesAll
