import { useEffect, useReducer } from 'react';
import './PlayMemory.css';
import {
  setFlippedCard,
  shuffleCards
} from '../../../reducer/MemoryGame/actions';
import {
  MEMORYGAME_INITIAL_STATE,
  memoryGameReducer
} from '../../../reducer/MemoryGame/reducer';
import Card from '../Card/Card';

import GameOver from '../../General/GameOver/GameOver';
import Timer from '../../General/Timer/Timer';

const PlayMemory = () => {
  const [state, dispatch] = useReducer(
    memoryGameReducer,
    MEMORYGAME_INITIAL_STATE
  );

  const { cards, cardsFlipped, cardsMatched, mode } = state;

  useEffect(() => {
    shuffleCards(dispatch);
  }, []);

  {
    console.log('soy playmemory y me renderizo');
    console.log(cardsFlipped);
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
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onClick={
              () => setFlippedCard({ dispatch, cardsFlipped, card })
              // dispatch({ type: 'SET_CARD_FLIPPED', payload: card })
            }
          />
        ))}
      </div>
    </>
  );
};

export default PlayMemory;
