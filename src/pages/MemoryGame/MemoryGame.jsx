import InitGame from '../../components/MemoryGame/InitGame/InitGame';
import './MemoryGame.css';
import ButtonLink from '../../components/General/ButtonLink/ButtonLink';
import BackLink from '../../components/General/BackLink/BackLink';

const MemoryGame = () => {
  return (
    <>
      <InitGame />
      <ButtonLink
        alt='play button'
        text='START'
        path='/memorygame/play'
        className='playButton'
      ></ButtonLink>
      <BackLink />
    </>
  );
};

export default MemoryGame;
