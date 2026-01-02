import { useEffect, useReducer } from 'react';
import './PlayMemory.css';
import { shuffleCards } from '../../../reducer/MemoryGame/actions';
import {
  MEMORYGAME_INITIAL_STATE,
  memoryGameReducer
} from '../../../reducer/MemoryGame/reducer';
import Card from '../Card/Card';
import useMoves from '../../../hooks/useMoves';

const PlayMemory = () => {
  const [state, dispatch] = useReducer(
    memoryGameReducer,
    MEMORYGAME_INITIAL_STATE
  );

  const { cards } = state;

  //moves
  const { moves, increaseMoves } = useMoves();

  useEffect(() => {
    shuffleCards(dispatch);
  }, []);

  return (
    <>
      <h2 className='moves'> moves {moves}</h2>
      <div className='cards'>
        {cards.map((card, index) => (
          <Card key={index} card={card} increaseMoves={increaseMoves} />
        ))}
      </div>
    </>
  );
};

export default PlayMemory;
