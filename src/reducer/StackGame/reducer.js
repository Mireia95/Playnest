export const MODES = {
  init: 'init',
  move: 'move',
  fall: 'fall',
  gameover: 'gameover'
}

//variables constantes

export const STACKGAME_INITIAL_STATE = {
  boxes: [], //array con los cubos
  mode: MODES.init,
  hueColor: Math.floor(Math.random() * 360),
  xSpeed: 1,
  ySpeed: 5, //para los debris
  gameover: false,
  box_height: 2,
  pos: 0, //posicion inicial

  debris: { x: 0, y: 0, width: 0, height: 0, color: 'red' },
  current: 1,

  scrollCounter: 0,
  cameraY: 0
}

export const stackGameReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, boxes: action.payload }
    case 'SET_MODE':
      return { ...state, mode: action.payload }
    case 'UPDATE_BOXES':
      return { ...state, boxes: action.payload }
  }
}
