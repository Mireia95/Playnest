import './Timer.css';
import useTimer from '../../../hooks/useTimer';

const Timer = ({ gameOverFunction, initTime }) => {
  const { time } = useTimer({
    gameOverFunction,
    initTime: initTime
  });

  return (
    <div className='timer'>
      <img alt='timer' src='/assets/GuessTheColor/time.svg' />
      <p>{time} sec</p>
    </div>
  );
};

export default Timer;
