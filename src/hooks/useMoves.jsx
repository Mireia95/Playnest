import { useState } from 'react';

const useMoves = () => {
  const [moves, setMoves] = useState(0);

  const increaseMoves = () => {
    setMoves(moves + 1);
  };

  return { moves, increaseMoves };
};

export default useMoves;
