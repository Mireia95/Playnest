import { cards } from '../../utils/MemoryGame/cards'

export const shuffleCards = (dispatch) => {
  const duplicateCards = [...cards, ...cards]

  //array para shuffle
  let cardsForGame = [...duplicateCards]

  //shuffle usando tecnica Fisher Yates
  for (let i = cardsForGame.length - 1; i > 0; i--) {
    const randomPos = Math.floor(Math.random() * (i + 1)) //genero un numero enntre 0 y i

    const savedPos = cardsForGame[i]
    cardsForGame[i] = cardsForGame[randomPos]
    cardsForGame[randomPos] = savedPos
  }

  dispatch({ type: 'SET_CARDS', payload: cardsForGame })
}

export const compareCards = (cardFlipped, card) => {
  //!compara las dos cartas que hay dentro del array flippedCard
  const matched = cardFlipped[0].alt === card.alt ? true : false

  return matched
}

export const setFlippedCard = ({ dispatch, cardsFlipped, card }) => {
  if (cardsFlipped.length === 0) {
    dispatch({ type: 'SET_FLIPPED_CARD', payload: card })
  }

  if (cardsFlipped.length === 1) {
    let matched = compareCards(cardsFlipped, card)
    matched
      ? dispatch({ type: 'SET_MATCHED_CARD', payload: card })
      : dispatch({ type: 'CLEAN_FLIPPED_CARD' })
  }
}
