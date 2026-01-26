import React from 'react';
import './Points.css';

const Points = React.memo(({ points }) => {
  console.log('soy Points y me renderizo');
  //uso React.memo para que Points se renderize solo si cambia el prop points (si el jugador acierta el color)

  return (
    <div className='points'>
      <img alt='timer' src='/assets/GuessTheColor/points.svg' />
      <p>{points} </p>
    </div>
  );
});

export default Points;
