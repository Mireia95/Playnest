export const MODES = {
  start: 'start',
  fall: 'fall',
  bounce: 'bounce',
  gameover: 'gameover'
};

//variables constantes

export const INITIAL_STATE = {
  cubes: [], //array con los cubos
  cube_width: 200,
  hue: Math.floor(Math.random() * 360),
  debris: { x: 0, y: 0, width: 0, height: box_height, color: hue },
  current: 1,
  mode: MODES.start,
  xSpeed: 1,
  ySpeed: 5,
  scrollCounter: 0,
  cameraY: 0
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...INITIAL_STATE, boxes: action.payload };
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'UPDATE_BOXES':
      return { ...state, boxes: action.payload };
  }
};
