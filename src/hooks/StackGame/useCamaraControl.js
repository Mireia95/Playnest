import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export const useCameraControl = ({ cameraY }) => {
  const { camera } = useThree();

  const currentPosY = useRef(camera.position.y); //para controlar el movimiento suave

  console.log(camera.position.y);
  console.log(cameraY);

  useEffect(() => {
    if (camera.position.y !== cameraY) {
      camera.position.y = cameraY;
    }
  }, [cameraY]);

  //movimiento suave
  useFrame(() => {
    /*  console.log(camera.position.y - cameraY); */
    /*  if (camera.position.y !== cameraY) {
      console.log('animame');
    } */
  });
};
