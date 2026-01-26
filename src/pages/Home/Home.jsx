import Lottie from 'lottie-react';
import ControllerPlay from '../../../public/assets/ControllerPlay.json';
import CardGame from '../../components/Home/CardGame/CardGame';
import Footer from '../../components/Home/Footer/Footer';
import Header from '../../components/Home/Header/Header';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className='flex'>
        <div className='title flex'>
          <div className='flex'>
            <Lottie animationData={ControllerPlay} loop={false} />
            <h2> Let's play! </h2>
          </div>
          <h3> Which game would you like to start? </h3>
        </div>
        <section id='games' className='flex'>
          {/*  <CardGame
            link='/pokemon'
            img='./assets/PokemonBattleCard.png'
            alt='pokemon battle'
          /> */}
          <CardGame
            link='/guesscolor'
            img='./assets/GuessTheColorCard.svg'
            alt='quiz time'
          />
          <CardGame
            link='/memorygame'
            img='./assets/MemoryGameCard.png'
            alt='stackgame'
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
