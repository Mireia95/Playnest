import { useEffect } from 'react';
import {
  checkBoxCollision,
  createNewBox,
  nextLevel
} from '../../reducer/StackGame/actions';

export const useEventControl = ({
  mode,
  boxes,
  hueColorBox,
  xSpeed,
  dispatch
}) => {
  const onClick = (e) => {
    e.preventDefault();
    //!check boxes debris - comparar 2 boxes
    //!mover camara
    checkBoxCollision({ boxes });
    nextLevel({ dispatch });
    createNewBox({ boxes, hueColorBox, xSpeed, dispatch });
  };

  const onKeyDown = (e) => {
    e.preventDefault();
    if (e.key === ' ') {
      onClick(e);
    }
  };

  useEffect(() => {
    //click en canvas
    if (mode === 'init') return;
    if (mode === 'move') {
      window.addEventListener('keydown', onKeyDown);

      window.addEventListener('click', onClick);

      window.addEventListener('touchstart', onClick);

      return () => {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('click', onClick);
        window.removeEventListener('touchstart', onClick);
      };
    }
  }, [mode, boxes, hueColorBox, xSpeed, dispatch]);
};
