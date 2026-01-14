import { MODE } from '../../utils/MemoryGame/constants'

export const MEMORYGAME_INITIAL_STATE = {
  cards: [],
  cardsFlipped: [],
  cardsMatched: [],
  mode: MODE.play
}

export const memoryGameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: [...action.payload] }

    /*     
    case 'SET_CARD_FLIPPED':
      return { ...state, cardsFlipped: [...action.payload]}
      case 'SET_CARD_MATCHED':
      return { ...state, cardsMatched: [...action.payload]} 
      */
    case 'SET_GAMEOVER':
      return { ...state, mode: MODE.gameover }
    default:
      return state
  }
}
