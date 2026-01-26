import React from 'react';
import './CardColor.css';

const CardColor = React.memo(({ ele, onClick }) => {
  console.log('soy CardColor y me renderizo');
  return (
    <div
      className='cardColor'
      onClick={onClick}
      style={{ backgroundColor: ele?.color }}
    >
      <p style={{ color: ele?.textColor }}> {ele ? ele.text : ''} </p>
    </div>
  );
});

export default CardColor;
