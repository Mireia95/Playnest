import { useRef } from 'react'
import { BOX_HEIGHT } from '../../../utils/StackGame/constants'
import { useFrame } from '@react-three/fiber'

const Box = ({ box }) => {
  //control movements
  const refBox = useRef()

  let xSpeed = 0

  useFrame(() => {
    if (box.moving) {
      if (refBox.current.position.x < 2) {
        xSpeed = 1
        refBox.current.position.x = refBox.current.position.x + 0.5 * xSpeed
      } else if (refBox.current.position.x > 2) {
        xSpeed = -1
        refBox.current.position.x = refBox.current.position.x + 0.5 * xSpeed
      }
      console.log(refBox.current.position.x)
    }
  })

  return (
    <mesh key={box.id} ref={refBox} position={[0, box.posY, 0]}>
      <boxGeometry args={[2, BOX_HEIGHT, 2]} />
      <meshStandardMaterial color={box.color} />
    </mesh>
  )
}

export default Box
