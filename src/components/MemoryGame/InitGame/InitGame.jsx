import './InitGame.css';

const InitGame = () => {
  return (
    <>
      <img className='title' src='./assets/MemoryGame/MemoryGameTitle.png' />
      <h3>
        Flip the cards and find all matching pairs using the fewest moves
        possible.
      </h3>
      <img src='./assets/MemoryGame/cardsHome.png' />
    </>
  );
};

export default InitGame;
