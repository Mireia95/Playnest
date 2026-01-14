import './Points.css';

const Points = ({ points }) => {
  return (
    <div className='points'>
      <img alt='timer' src='/assets/GuessTheColor/points.svg' />
      <p>{points} </p>
    </div>
  );
};

export default Points;
