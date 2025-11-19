import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PokemonHome from './pages/Pokemon/PokemonHome/PokemonHome';
import StackGame from './pages/StackGame/StackGame';
import GuessColor from './pages/GuessColor/GuessColor';
import PlayGame from './components/GuessColor/PlayGame/PlayGame';
import GuessColorBG from './components/GuessColor/GuessColorBG/GuessColorBG';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<PokemonHome />} />
        <Route path='/guesscolor' element={<GuessColorBG />}>
          <Route index element={<GuessColor />} />
          <Route path='play' element={<PlayGame />} />
        </Route>
        <Route path='/stackgame' element={<StackGame />} />
      </Routes>
    </>
  );
};

export default App;
