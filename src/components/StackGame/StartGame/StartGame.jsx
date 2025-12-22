import { createNewBox } from '../../../reducer/StackGame/actions';
import './StartGame.css';

const StartGame = ({ dispatch, boxes, xSpeed, hueColorBox, mode }) => {
  return mode === 'init' ? (
    <button
      className='start-stack-game'
      /* onClick={() => {
        createNewBox({
          dispatch: dispatch,
          boxes: boxes,
          hueColorBox: hueColorBox,
          xSpeed: xSpeed
        });
      }} */
      onClick={() => dispatch({ type: 'START_GAME' })}
    >
      Start
    </button>
  ) : null;
};

export default StartGame;
