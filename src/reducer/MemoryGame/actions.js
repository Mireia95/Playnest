import { cards } from '../../utils/MemoryGame/cards';

export const shuffleCards = (dispatch) => {
  const duplicateCards = [...cards, ...cards];

  //array para shuffle
  let cardsForGame = [...duplicateCards];

  //shuffle usando tecnica Fisher Yates
  for (let i = cardsForGame.length - 1; i > 0; i--) {
    const randomPos = Math.floor(Math.random() * (i + 1)); //genero un numero enntre 0 y i

    const savedPos = cardsForGame[i];
    cardsForGame[i] = cardsForGame[randomPos];
    cardsForGame[randomPos] = savedPos;
  }

  dispatch({ type: 'SET_CARDS', payload: cardsForGame });
};
