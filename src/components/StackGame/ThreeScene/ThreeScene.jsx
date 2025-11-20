import { useEffect, useRef, useState } from 'react';
import './ThreeScene.css';
import StartGame from '../StartGame/StartGame';
import { Canvas } from '@react-three/fiber';
import Box from '../Box/Box';
import BackLink from '../../General/BackLink/BackLink';

const ThreeScene = () => {
  //ref para montar ThreeScene solo en el div
  const mountRef = useRef();

  //estados
  const [gameover, setGameOver] = useState(false);
  const [hueColor, setHueColor] = useState(Math.floor(Math.random() * 360));

  //montamos la ThreeScene
  useEffect(() => {});

  return (
    <div ref={mountRef} className='canvas'>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [5, 3, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 5, 2]} intensity={0.4} />
        <Box hueColor={hueColor} setHueColor={setHueColor} />
      </Canvas>
      <StartGame />
      <BackLink />
      {/*   <div id='info'>
        <Info />
      </div> */}
    </div>
  );
};

export default ThreeScene;
