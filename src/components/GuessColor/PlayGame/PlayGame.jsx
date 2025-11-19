import CardColor from '../CardColor/CardColor';
import './PlayGame.css';

const PlayGame = () => {
  console.log('hola');
  return (
    <>
      <div>Time</div>
      <div> color </div>
      <div className='cardsColor'>
        <CardColor />
        <CardColor />
        <CardColor />
        <CardColor />
      </div>
    </>
  );
};

export default PlayGame;
