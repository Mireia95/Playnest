import './GuessColorBG.css';
import { Outlet } from 'react-router-dom';

const GuessColorBG = () => {
  return (
    <div id='guessColor'>
      <Outlet />
    </div>
  );
};

export default GuessColorBG;
