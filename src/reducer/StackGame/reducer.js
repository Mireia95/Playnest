import {
  BOX_HEIGHT,
  hueColorInit,
  MODES
} from '../../utils/StackGame/constants';

export const STACKGAME_INITIAL_STATE = {
  boxes: [
    {
      id: 0,
      moving: false,
      color: `hsl(${hueColorInit}, 70%, 80%)`,
      width: 2,
      posX: 0,
      posY: -2 //el primero irà mas abajo para verlo mejor en el canvas. El siguiente serà posY + BOX_HEIGHT
    }
  ], //array con los cubos
  mode: MODES.init,
  level: 0,
  hueColorBox: (hueColorInit + 20) % 360,
  current: 1, //!
  xSpeed: 0.02,
  debris: { x: 0, y: 0, width: 0, height: 0, color: 'red' },
  scrollCounter: 0, //!
  cameraY: 4
};

export const stackGameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        mode: MODES.move
      };
    case 'NEXT_LEVEL':
      return {
        ...state,
        level: state.level + 1
      };
    case 'CREATE_NEW_BOX':
      return {
        ...state,
        cameraY: state.cameraY + BOX_HEIGHT,
        xSpeed: action.payload.xSpeed,
        hueColorBox: action.payload.newHueColor,
        boxes: [...state.boxes, action.payload.newBox]
      };
  }
};
