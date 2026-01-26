import React from 'react';
import './Lifes.css';

const Lifes = React.memo(({ lifes }) => {
  console.log('soy Lifes y me renderizo');
  //uso React.memo para que Lifes se renderize solo si cambia el prop lifes (si el jugador pierde una vida)
  return (
    <div className='lifes'>
      {lifes.map((life, index) => (
        <img key={index} src='/assets/GuessTheColor/life.svg' alt='life' />
      ))}
    </div>
  );
});

export default Lifes;
