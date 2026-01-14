import { useEffect, useReducer } from 'react'
import './PlayMemory.css'
import { shuffleCards } from '../../../reducer/MemoryGame/actions'
import {
  MEMORYGAME_INITIAL_STATE,
  memoryGameReducer
} from '../../../reducer/MemoryGame/reducer'
import Card from '../Card/Card'
import useMoves from '../../../hooks/useMoves'
import GameOver from '../../General/GameOver/GameOver'

const PlayMemory = () => {
  const [state, dispatch] = useReducer(
    memoryGameReducer,
    MEMORYGAME_INITIAL_STATE
  )

  const { cards, cardsFlipped, cardsMatched, mode } = state

  //moves
  const { moves, increaseMoves } = useMoves()

  useEffect(() => {
    shuffleCards(dispatch)
  }, [])

  useEffect(() => {
    if (moves === 20) {
      dispatch({ type: 'SET_GAMEOVER' })
    }
  }, [moves])

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
      <h2 className='moves'> moves {moves}</h2>
      <div className='cards'>
        {cards.map((card, index) => (
          <Card key={index} card={card} increaseMoves={increaseMoves} />
        ))}
      </div>
    </>
  )
}

export default PlayMemory
