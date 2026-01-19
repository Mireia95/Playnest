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

    case 'SET_FLIPPED_CARD':
      return {
        ...state,
        cardsFlipped: [...state.cardsFlipped, action.payload]
      }
    case 'CLEAN_FLIPPED_CARD':
      return {
        ...state,
        cardsFlipped: []
      }
    case 'SET_MATCHED_CARD':
      return {
        ...state,
        cardsMatched: [...state.cardsMatched, ...action.payload],
        cardsFlipped: []
      }

    case 'SET_GAMEOVER':
      return { ...state, mode: MODE.gameover }
    default:
      return state
  }
}
