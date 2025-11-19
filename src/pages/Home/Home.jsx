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
          <CardGame
            link='/pokemon'
            img='./assets/PokemonBattle.png'
            alt='pokemon battle'
          />
          <CardGame
            link='/guesscolor'
            img='./assets/GuessTheColor.png'
            alt='quiz time'
          />
          <CardGame
            link='/stackgame'
            img='./assets/StackGame.png'
            alt='stackgame'
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
