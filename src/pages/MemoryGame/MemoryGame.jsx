import { useReducer } from 'react';
import InitGame from '../../components/MemoryGame/InitGame/InitGame';
import './MemoryGame.css';
import {
  MEMORYGAME_INITIAL_STATE,
  memoryGameReducer
} from '../../reducer/MemoryGame/reducer';

const MemoryGame = () => {
  const [state, dispatch] = useReducer(
    memoryGameReducer,
    MEMORYGAME_INITIAL_STATE
  );
  const { mode } = state;

  return (
    <div id='memorygame' className='flex'>
      {mode === 'init' ? (
        <>
          <InitGame />
          <button
            className='startButt'
            onClick={() => dispatch({ type: 'SET_PLAY' })}
          >
            START
          </button>
        </>
      ) : null}
      {mode === 'play' ? <h3> giochiamo</h3> : null}
    </div>
  );
};

export default MemoryGame;
