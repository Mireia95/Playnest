import { useEffect, useState } from 'react';

const useTimer = ({ gameOverFunction = () => {} }) => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time <= 0) {
      gameOverFunction();
      return;
    }
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return { time };
};

export default useTimer;
