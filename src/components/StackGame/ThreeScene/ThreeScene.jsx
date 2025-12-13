import { useReducer } from 'react'
import './ThreeScene.css'
import StartGame from '../StartGame/StartGame'
import { Canvas } from '@react-three/fiber'

import BackLink from '../../General/BackLink/BackLink'
import Info from '../Info/Info'
import {
  STACKGAME_INITIAL_STATE,
  stackGameReducer
} from '../../../reducer/StackGame/reducer'
import GameOver from '../GameOver/GameOver'
import BoxesAll from '../BoxesAll/BoxesAll'
import { MODES } from '../../../utils/StackGame/constants'

const ThreeScene = () => {
  //useReducer
  const [state, dispatch] = useReducer(
    stackGameReducer,
    STACKGAME_INITIAL_STATE
  )

  const { boxes, mode, hueColorBox } = state

  return (
    <div className='canvas'>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [5, 3, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 5, 2]} intensity={0.4} />

        <BoxesAll boxes={boxes} />
      </Canvas>
      {mode === MODES.move ? <h2>HOLA</h2> : null}
      <div className='stackgame-info'>
        <Info />
        <StartGame
          dispatch={dispatch}
          boxes={boxes}
          hueColorBox={hueColorBox}
        />
      </div>

      <BackLink />
      {mode.gameover ? <GameOver /> : null}
    </div>
  )
}

export default ThreeScene
