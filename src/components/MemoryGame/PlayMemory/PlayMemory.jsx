import { useEffect, useReducer } from 'react'
import './PlayMemory.css'
import {
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

const PlayMemory = () => {
  const [state, dispatch] = useReducer(
    memoryGameReducer,
    MEMORYGAME_INITIAL_STATE
  )

  const { cards, cardsFlipped, cardsMatched, mode } = state

  useEffect(() => {
    shuffleCards(dispatch)
  }, [])

  //compare cards
  useEffect(() => {
    if (cardsFlipped.length === 2) {
      let matched = cardsFlipped[0].alt === cardsFlipped[1].alt ? true : false

      console.log(matched)
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

  {
    console.log('soy playmemory y me renderizo')
  }
  return (
    <>
      {mode === 'gameover' ? (
        <GameOver
          general={true}
          path={'/memorygame/play'}
          homePath={'/memorygame'}
        />
      ) : null}

      <Timer
        gameOverFunction={() => dispatch({ type: 'SET_GAMEOVER' })}
        initTime={60}
      />
      <div className='cards'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => setFlippedCard({ dispatch, cardsFlipped, card })}
            cardsFlipped={cardsFlipped}
            cardsMatched={cardsMatched}
          />
        ))}
      </div>
    </>
  )
}

export default PlayMemory
