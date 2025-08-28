import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PokemonHome from './pages/Pokemon/PokemonHome/PokemonHome';
import QuizHome from './pages/QuizGame/QuizHome';
import StackGame from './pages/StackGame/StackGame';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<PokemonHome />} />
        <Route path='/quiztime' element={<QuizHome />} />
        <Route path='/stackgame' element={<StackGame />} />
      </Routes>
    </>
  );
};

export default App;
