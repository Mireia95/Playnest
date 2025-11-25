import { useState } from 'react';
import CardsColorDiv from '../CardsColorDiv/CardsColorDiv';
import './PlayGame.css';
import { useEffect } from 'react';
import GameOver from '../GameOver/GameOver';

const PlayGame = () => {
  const [colorText, setColorText] = useState(['']);

  useEffect(() => {
    /*   const newArray = getRandomColors(colors);
    setColorText(newArray.text); */
  }, []);

  return (
    <>
      <div>Time</div>
      <div> green </div>
      <CardsColorDiv text={'green'} />
      <GameOver />
    </>
  );
};

export default PlayGame;
