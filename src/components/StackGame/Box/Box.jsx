import { useRef } from 'react';
import { BOX_HEIGHT } from '../../../utils/StackGame/constants';
import { useFrame } from '@react-three/fiber';

const Box = ({ box, xSpeed }) => {
  //control movements
  const refBox = useRef(); //para tener la refe del box que quiero mover
  const direction = useRef(1); //para controlar si va a la izquierda o derecha

  useFrame(() => {
    //si el box tiene moving=true, estamos controlando el último box creado (se tiene que mover)
    if (box.moving) {
      refBox.current.position.x += xSpeed * direction.current;

      const hasCollisionRight = refBox.current.position.x > 2;
      const hasCollisionLeft = refBox.current.position.x < -2;

      hasCollisionRight || hasCollisionLeft
        ? (direction.current = -direction.current)
        : null;
    }
  });

  return (
    <mesh key={box.id} ref={refBox} position={[0, box.posY, 0]}>
      <boxGeometry args={[2, BOX_HEIGHT, 2]} />
      <meshStandardMaterial color={box.color} />
    </mesh>
  );
};

export default Box;
