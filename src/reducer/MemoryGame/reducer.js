import { MODE } from '../../utils/MemoryGame/constants';

export const MEMORYGAME_INITIAL_STATE = {
  moves: 0,
  mode: MODE.init
};

export const memoryGameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAY':
      return { ...state, mode: MODE.play };

    /*  case 'SUM_POINTS':
      return { ...state, points: state.points + 5 };
    case 'SET_COLOR_OPTIONS':
      return { ...state, colorOptions: [...action.payload] };
    case 'SET_COLOR_PRINT':
      return { ...state, colorPrint: { ...action.payload } };
    /*     case 'SELECT_COLOR':
      return { ...state, colorSelected: { ...action.payload } } */
    case 'SET_GAMEOVER':
      return { ...state, mode: MODE.gameover };
    default:
      return state;
  }
};
