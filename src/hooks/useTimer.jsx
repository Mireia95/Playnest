import { useEffect, useState } from 'react';

const useTimer = ({ gameOverFunction = () => {}, initTime }) => {
  const [time, setTime] = useState(initTime);

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
