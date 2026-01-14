import { useReducer } from 'react'
import CardsColorDiv from '../CardsColorDiv/CardsColorDiv'
import './PlayGame.css'
import { useEffect } from 'react'

import Timer from '../Timer/Timer'
import ColorPrompt from '../ColorPrompt/ColorPrompt'
import {
  GUESSCOLOR_INITIAL_STATE,
  guessColorReducer
} from '../../../reducer/GuessColor/reducer'
import { setRandomColors } from '../../../reducer/GuessColor/actions'
import { colors } from '../../../utils/GuessColor/colors'
import useMoves from '../../../hooks/useMoves'
import GameOver from '../../General/GameOver/GameOver'

const PlayGame = () => {
  const [state, dispatch] = useReducer(
    guessColorReducer,
    GUESSCOLOR_INITIAL_STATE
  )

  const { points, colorPrint, colorOptions, gameover } = state

  const { moves, increaseMoves } = useMoves()

  useEffect(() => {
    setRandomColors(colors, dispatch)
  }, [])

  return (
    <>
      <div className='infoBar'>
        <Timer dispatch={dispatch} />
        <h2> moves {moves} </h2>
        <h2 className='points'> points {points}</h2>
      </div>
      <ColorPrompt color={colorPrint} />
      <CardsColorDiv
        dispatch={dispatch}
        colorOptions={colorOptions}
        colorPrint={colorPrint}
        increaseMoves={() => {
          increaseMoves()
        }}
      />
      {gameover ? (
        <GameOver
          points={points}
          path={'/guesscolor/play'}
          homePath={'/guesscolor'}
        />
      ) : null}
    </>
  )
}

export default PlayGame
