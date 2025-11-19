import ButtonLink from '../ButtonLink/ButtonLink';
import './InitGame.css';

const InitGame = () => {
  return (
    <>
      <h1> Guess the color</h1>
      <h2> How to play</h2>
      <p> Read the word on the screen and choose the correct color. </p>
      <ButtonLink
        img=''
        alt='play button'
        text='PLAY'
        path='/guesscolor/play'
        className='playButton'
      ></ButtonLink>
    </>
  );
};

export default InitGame;
