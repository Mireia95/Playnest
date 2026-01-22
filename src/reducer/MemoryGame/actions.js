import { cards } from '../../utils/MemoryGame/cards'

export const shuffleCards = (dispatch) => {
  const duplicateCards = []

  for (let i = 0; i < cards.length; i++) {
    duplicateCards.push({ ...cards[i] })
    duplicateCards.push({ ...cards[i] })
  }

  //array para shuffle
  let cardsForGame = [...duplicateCards]

  //shuffle usando tecnica Fisher Yates
  for (let i = cardsForGame.length - 1; i > 0; i--) {
    const randomPos = Math.floor(Math.random() * (i + 1)) //genero un numero enntre 0 y i

    const savedPos = cardsForGame[i]
    cardsForGame[i] = cardsForGame[randomPos]
    cardsForGame[randomPos] = savedPos
  }

  for (let i = 0; i < cardsForGame.length; i++) {
    cardsForGame[i].id = i
  }

  dispatch({ type: 'SET_CARDS', payload: cardsForGame })
}

export const compareCards = (cardsFlipped) => {
  let matched = cardsFlipped[0].alt === cardsFlipped[1].alt ? true : false
  return matched
}

export const setFlippedCard = ({ dispatch, card }) => {
  dispatch({ type: 'SET_FLIPPED_CARD', payload: card })
}
