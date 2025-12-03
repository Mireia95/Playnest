import { useReducer } from 'react'
import CardsColorDiv from '../CardsColorDiv/CardsColorDiv'
import './PlayGame.css'
import { useEffect } from 'react'
import GameOver from '../GameOver/GameOver'
import Timer from '../Timer/Timer'
import ColorPrompt from '../ColorPrompt/ColorPrompt'
import {
  GUESSCOLOR_INITIAL_STATE,
  guessColorReducer
} from '../../../reducer/GuessColor/reducer'
import { setRandomColors } from '../../../reducer/GuessColor/actions'
import { colors } from '../../../utils/GuessColor/colors'

const PlayGame = () => {
  const [state, dispatch] = useReducer(
    guessColorReducer,
    GUESSCOLOR_INITIAL_STATE
  )

  const { points, colorPrint, colorOptions, colorSelected, gameover } = state

  useEffect(() => {
    setRandomColors(colors, dispatch)
    console.log(colorPrint)
  }, [])

  return (
    <>
      <div className='infoBar'>
        <Timer dispatch={dispatch} />
        <h2 className='points'> points {points}</h2>
      </div>
      <ColorPrompt color={colorPrint} />
      <CardsColorDiv text={'green'} />
      {gameover ? <GameOver points={points} /> : null}
    </>
  )
}

export default PlayGame
