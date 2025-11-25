import './GameOver.css';

const GameOver = ({ stars = 3, points = 0 }) => {
  return (
    <div className='gameover'>
      <h2>Game Over </h2>
      <div className='stars'>
        <img src='./assets/GuessTheColor/starFull.svg' alt='full star' />
        <img src='./assets/GuessTheColor/starEmpty.svg' alt='full empty' />
        <img src='' alt='' />
        <h3> {points} points </h3>
      </div>
    </div>
  );
};

export default GameOver;
