import { useRef } from 'react'
import { BOX_HEIGHT } from '../../../utils/StackGame/constants'
import { useFrame } from '@react-three/fiber'

const Box = ({ box, xSpeed }) => {
  //control movements
  const refBox = useRef()
  const direction = useRef(1)

  useFrame(() => {
    if (box.moving) {
      refBox.current.position.x += xSpeed * direction.current

      const hasCollisionRight = refBox.current.position.x > 2
      const hasCollisionLeft = refBox.current.position.x < -2

      hasCollisionRight || hasCollisionLeft
        ? (direction.current = -direction.current)
        : null

      /*   if (
        (hasCollisionRight) ||
        (isMovingLeft)
      ) {
        xSpeed = -xSpeed
      } */
      //! console.log(refBox.current.position.x)
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
