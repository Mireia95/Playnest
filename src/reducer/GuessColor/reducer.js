export const GUESSCOLOR_INITIAL_STATE = {
  points: 0,
  colorPrint: '',
  colorOptions: [],
  lifes: [
    '/asset/GuessTheColor/life.svg',
    '/asset/GuessTheColor/life.svg',
    '/asset/GuessTheColor/life.svg'
  ],
  gameover: false
};

export const guessColorReducer = (state, action) => {
  switch (action.type) {
    case 'SUM_POINTS':
      return { ...state, points: state.points + 5 };
    case 'SET_COLOR_OPTIONS':
      return { ...state, colorOptions: [...action.payload] };
    case 'SET_COLOR_PRINT':
      return { ...state, colorPrint: { ...action.payload } };

    case 'REMOVE_LIFE':
      return { ...state, lifes: state.lifes.slice(0, -1) };

    case 'SET_GAMEOVER':
      return { ...state, gameover: true };
    default:
      return state;
  }
};
