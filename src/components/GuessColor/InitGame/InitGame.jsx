import BackLink from '../../General/BackLink/BackLink';
import ButtonLink from '../../General/ButtonLink/ButtonLink';

import './InitGame.css';

const InitGame = () => {
  return (
    <>
      <div className='guessTheColorTitle'>
        <img
          src='./assets/GuessTheColor/GuessTheColorTitle.svg'
          alt='guess the color title'
        />{' '}
      </div>

      <p className='infoGame'>
        {' '}
        Read the word on the screen and choose the correct color to score points
        before the 30 seconds run out.{' '}
      </p>
      <ButtonLink
        alt='play button'
        img='/assets/GuessTheColor/playbutton.png'
        path='/guesscolor/play'
        className='playButton'
      ></ButtonLink>

      <BackLink />
    </>
  );
};

export default InitGame;
