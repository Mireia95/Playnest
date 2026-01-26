import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PokemonHome from './pages/Pokemon/PokemonHome/PokemonHome';
import GuessColor from './pages/GuessColor/GuessColor';
import PlayGame from './components/GuessColor/PlayGame/PlayGame';
import GuessColorBG from './components/GuessColor/GuessColorBG/GuessColorBG';
import MemoryGame from './pages/MemoryGame/MemoryGame';
import PlayMemory from './components/MemoryGame/PlayMemory/PlayMemory';
import MemoryGameBG from './components/MemoryGame/MemoryGameBG/MemoryGameBG';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*    <Route path='/pokemon' element={<PokemonHome />} /> */}
        <Route path='/guesscolor' element={<GuessColorBG />}>
          <Route index element={<GuessColor />} />
          <Route path='play' element={<PlayGame />} />
        </Route>
        <Route path='/memorygame' element={<MemoryGameBG />}>
          <Route index element={<MemoryGame />} />
          <Route path='play' element={<PlayMemory />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
