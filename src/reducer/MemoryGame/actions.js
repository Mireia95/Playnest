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

export const compareCards = (cards) => {
  //!compara las dos cartas que hay dentro del array flippedCard
  cards[0].alt === cards[1].alt
    ? console.log('cuadran!')
    : console.log('NO CUADRAN');
};

export const setFlippedCard = ({ dispatch, cardsFlipped, card }) => {
  if (cardsFlipped.length < 2) {
    dispatch({ type: 'SET_FLIPPED_CARD', payload: card });
  }

  if (cardsFlipped.length === 2) {
    compareCards(cardsFlipped);
    dispatch({ type: 'CLEAN_FLIPPED_CARD' });
  }
};
