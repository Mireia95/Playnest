import { hueColorInit, MODES } from '../../utils/StackGame/constants'

export const STACKGAME_INITIAL_STATE = {
  boxes: [
    {
      id: 0,
      moving: false,
      color: `hsl(${hueColorInit}, 70%, 80%)`,
      posY: -2 //el primero irà mas abajo para verlo mejor en el canvas. El siguiente serà posY + BOX_HEIGHT
    }
  ], //array con los cubos
  mode: MODES.init,
  hueColorBox: (hueColorInit + 20) % 360,
  current: 1,
  xSpeed: 0.5,
  ySpeed: 5, //para los debris
  gameover: false, //! en MODES
  debris: { x: 0, y: 0, width: 0, height: 0, color: 'red' },
  scrollCounter: 0, //!
  cameraY: 0 //!
}

export const stackGameReducer = (state, action) => {
  switch (action.type) {
    /*    case 'INIT': 
      return { ...state, boxes: action.payload } */
    /*    case 'SET_MODE': 
      return { ...state, mode: action.payload } */
    /*  case 'UPDATE_BOXES': //!
      return { ...state, boxes: action.payload } */

    case 'CREATE_NEW_BOX':
      return {
        ...state,
        hueColorBox: action.payload.newHueColor,
        boxes: [...state.boxes, action.payload.newBox]
      }
  }
}
