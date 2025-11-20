import { useEffect, useState } from 'react';
import './CardsColorDiv.css';
import { getRandomColors } from '../../../utils/GuessColor/getRandomColors';
import { colors } from '../../../utils/GuessColor/colors';
import CardColor from '../CardColor/CardColor';

const CardsColorDiv = ({ text }) => {
  const [randomColors, setRandomColors] = useState([]);

  useEffect(() => {
    const newArray = getRandomColors(colors);
    setRandomColors(newArray);
  }, []);

  //! PERSONAL HOOK
  const compare = (text, randomColor) => {
    const compare = text === randomColor.text ? true : false;
    //! si compare is true : suma 10 points
    //!si is false sigue - o imprime una X o algo
  };

  return (
    <div className='cardsColor'>
      <CardColor
        ele={randomColors[0]}
        onClick={() => compare(text, randomColors[0])}
      />
      <CardColor ele={randomColors[1]} />
      <CardColor ele={randomColors[2]} />
      <CardColor ele={randomColors[3]} />
    </div>
  );
};

export default CardsColorDiv;
