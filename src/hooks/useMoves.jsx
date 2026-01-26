import { useState } from 'react';

const useMoves = () => {
  //!al final no he usado este hook, pero lo he dejado preparado por si un dia añado un juego que tiene movimientos
  const [moves, setMoves] = useState(0);

  const increaseMoves = () => {
    setMoves(moves + 1);
  };

  return { moves, increaseMoves };
};

export default useMoves;
