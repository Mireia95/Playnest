const INITIAL_STATE = {
  points: 0,
  colorPrint: '',
  colorOptions: [], //igual no hace falta esto. Igual en el id de la Card puedo poner el nombre del color?
  colorSelected: '',
  gameover: false
}

//creo funcion reductora con switch/case
export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUM_POINTS':
      return { ...state, points: state.points + 10 }
    case 'GAMEOVER':
      return { ...state, gameover: true }
    case 'SET_COLORPROMPT':
      return { ...state, colorPrompt: [...action.payload] }
    case 'SET_COLOROPTIONS':
      return { ...state, colorOptions: [...action.payload] }

    default:
      return state
  }
}
