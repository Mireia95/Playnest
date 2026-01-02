import './CardsColorDiv.css';
import { getRandomColors } from '../../../utils/GuessColor/getRandomColors';
import { colors } from '../../../utils/GuessColor/colors';
import CardColor from '../CardColor/CardColor';
import {
  compareColors,
  setRandomColors
} from '../../../reducer/GuessColor/actions';

const CardsColorDiv = ({
  dispatch,
  colorOptions,
  colorPrint,
  increaseMoves = () => {}
}) => {
  return (
    <div className='cardsColor'>
      {colorOptions.map((option, i) => (
        <CardColor
          key={i}
          ele={option}
          onClick={() => {
            compareColors({
              colorSelected: option,
              colorPrint,
              dispatch
            });
            increaseMoves();
            setRandomColors(colors, dispatch);
          }}
        />
      ))}
    </div>
  );
};

export default CardsColorDiv;
