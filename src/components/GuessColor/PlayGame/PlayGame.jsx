import { useReducer } from 'react';
import CardsColorDiv from '../CardsColorDiv/CardsColorDiv';
import './PlayGame.css';
import { useEffect } from 'react';

import Timer from '../../General/Timer/Timer';
import ColorPrompt from '../ColorPrompt/ColorPrompt';
import {
  GUESSCOLOR_INITIAL_STATE,
  guessColorReducer
} from '../../../reducer/GuessColor/reducer';
import { setRandomColors } from '../../../reducer/GuessColor/actions';
import { colors } from '../../../utils/GuessColor/colors';
import GameOver from '../../General/GameOver/GameOver';
import Points from '../../General/Points/Points';

const PlayGame = () => {
  const [state, dispatch] = useReducer(
    guessColorReducer,
    GUESSCOLOR_INITIAL_STATE
  );

  const { points, colorPrint, colorOptions, gameover } = state;

  useEffect(() => {
    setRandomColors(colors, dispatch);
  }, []);

  return (
    <>
      <div className='infoBar'>
        <Timer
          gameOverFunction={() => dispatch({ type: 'SET_GAMEOVER' })}
          initTime={30}
        />

        <Points points={points} />
      </div>
      <ColorPrompt color={colorPrint} />
      <CardsColorDiv
        dispatch={dispatch}
        colorOptions={colorOptions}
        colorPrint={colorPrint}
      />
      {gameover ? (
        <GameOver
          points={points}
          path={'/guesscolor/play'}
          homePath={'/guesscolor'}
        />
      ) : null}
    </>
  );
};

export default PlayGame;
