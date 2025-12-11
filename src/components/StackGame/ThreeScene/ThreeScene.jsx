import { useReducer, useState } from 'react'
import './ThreeScene.css'
import StartGame from '../StartGame/StartGame'
import { Canvas } from '@react-three/fiber'
import Box from '../Box/Box'
import BackLink from '../../General/BackLink/BackLink'
import Info from '../Info/Info'
import {
  MODES,
  STACKGAME_INITIAL_STATE,
  stackGameReducer
} from '../../../reducer/StackGame/reducer'
import GameOver from '../GameOver/GameOver'

const ThreeScene = () => {
  //useReducer
  const [state, dispatch] = useReducer(
    stackGameReducer,
    STACKGAME_INITIAL_STATE
  )

  const { gameover, hueColor, mode } = state //!falta destructuring de los estados del useReducer

  return (
    <div className='canvas'>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [5, 3, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 5, 2]} intensity={0.4} />
        <Box hueColor={hueColor} dispatch={dispatch} />
      </Canvas>
      {mode === MODES.move ? <h2>HOLA</h2> : null}
      <Info />
      <StartGame dispatch={dispatch} />

      <BackLink />
      {gameover ? <GameOver /> : null}
    </div>
  )
}

export default ThreeScene
