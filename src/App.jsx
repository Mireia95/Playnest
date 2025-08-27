import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />}>
            {' '}
          </Route>
          {/*   <Route path='/pokemon' element={<PokemonHome />}>
            {' '}
          </Route>
          <Route path='/quiz' element={<QuizHome />}>
            {' '}
          </Route>
          <Route path='/stackgame' element={<StackGame />}>
            {' '}
          </Route> */}
        </Routes>
      </main>
    </>
  );
};

export default App;
