import { useCallback, useEffect, useReducer } from 'react'
import './PlayMemory.css'
import {
  compareCards,
  setFlippedCard,
  shuffleCards
} from '../../../reducer/MemoryGame/actions'
import {
  MEMORYGAME_INITIAL_STATE,
  memoryGameReducer
} from '../../../reducer/MemoryGame/reducer'
import Card from '../Card/Card'

import GameOver from '../../General/GameOver/GameOver'
import Timer from '../../General/Timer/Timer'
import WinGame from '../../General/WinGame/WinGame'

const PlayMemory = () => {
  const [state, dispatch] = useReducer(
    memoryGameReducer,
    MEMORYGAME_INITIAL_STATE
  )

  const { cards, cardsFlipped, cardsMatched, mode } = state

  //shuffle card at start game
  useEffect(() => {
    shuffleCards(dispatch)
  }, [])

  //compare cards
  useEffect(() => {
    if (cardsFlipped.length === 2) {
      let matched = compareCards(cardsFlipped)
      const timer = setTimeout(() => {
        matched
          ? dispatch({
              type: 'SET_MATCHED_CARD',
              payload: [cardsFlipped[0], cardsFlipped[1]]
            })
          : dispatch({ type: 'CLEAN_FLIPPED_CARD' })
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [cardsFlipped])

  //win game
  useEffect(() => {
    if (cardsMatched.length === 20) {
      //you win the game
      dispatch({ type: 'SET_WIN_GAME' })
    }
  }, [cardsMatched])

  //flipped card function
  const setFlipped = useCallback(
    (card) => {
      setFlippedCard({ dispatch, card })
    },
    [dispatch]
  )

  {
    console.log('soy playmemory y me renderizo')
  }
  return (
    <>
      {mode === 'win' ? <WinGame path={'/memorygame/play'} /> : null}
      {mode === 'gameover' ? (
        <GameOver general={true} path={'/memorygame/play'} />
      ) : null}
      {mode !== 'win' ? (
        <Timer
          gameOverFunction={() => dispatch({ type: 'SET_GAMEOVER' })}
          initTime={60}
        />
      ) : null}
      <div className='cards'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={setFlipped}
            isTurned={
              cardsFlipped.some((a) => a.id === card.id) ||
              cardsMatched.some((a) => a.id === card.id)
                ? true
                : false
            }
          />
        ))}
      </div>
    </>
  )
}

export default PlayMemory
