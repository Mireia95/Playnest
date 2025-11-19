import './StartGame.css';

const StartGame = () => {
  return (
    <button
      className='start-stack-game'
      onClick={() => {
        console.log('hola');
      }}
    >
      {' '}
      Start{' '}
    </button>
  );
};

export default StartGame;
