import { useCallback, useReducer } from 'react';
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

import Lifes from '../Lifes/Lifes';
import Points from '../Points/Points';

const PlayGame = () => {
  console.log('soy PLayGame y me renderizo');
  const [state, dispatch] = useReducer(
    guessColorReducer,
    GUESSCOLOR_INITIAL_STATE
  );

  const { points, colorPrint, colorOptions, lifes, gameover } = state;

  //random colors
  useEffect(() => {
    setRandomColors(colors, dispatch);
  }, []);

  //lifes
  useEffect(() => {
    if (lifes.length === 0) {
      dispatch({ type: 'SET_GAMEOVER' });
    }
  }, [lifes]);

  //gameover function
  //uso use.Callback para memorizar la funcion del dispatch y pasarla por prop a <Timer/>
  const setGameover = useCallback(() => {
    dispatch({ type: 'SET_GAMEOVER' });
  }, []);

  return (
    <>
      <div className='infoBar'>
        <Lifes lifes={lifes} />
        <Timer gameOverFunction={setGameover} initTime={30} />

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
