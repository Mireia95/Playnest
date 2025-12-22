import { useEffect } from 'react';
import { createNewBox } from '../../reducer/StackGame/actions';

export const useCamaraControl = ({
  mode,
  boxes,
  hueColorBox,
  xSpeed,
  dispatch
}) => {
  const onClick = (e) => {
    e.preventDefault();
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
    console.log(mode);
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
