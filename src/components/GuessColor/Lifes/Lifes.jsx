import './Lifes.css';

const Lifes = ({ lifes }) => {
  return (
    <div className='lifes'>
      {lifes.map((life, index) => (
        <img key={index} src='/assets/GuessTheColor/life.svg' alt='life' />
      ))}
    </div>
  );
};

export default Lifes;
