import ButtonLink from '../ButtonLink/ButtonLink'
import './GameOver.css'

const GameOver = ({ stars = 3, points = 20 }) => {
  const starEmpty = '../assets/GuessTheColor/starEmpty.svg'
  const starFull = '../assets/GuessTheColor/starFull.svg'
  const background = '../assets/GuessTheColor/GameOverBG.svg'

  return (
    <div className='gameoverDiv'>
      <div className='gameover'>
        <h2>Game Over </h2>
        <div className='stars'>
          <img src={starFull} alt='star' />
          <img src={points < 10 ? starEmpty : starFull} alt='star' />
          <img src={points < 30 ? starEmpty : starFull} alt='star' />
        </div>
        <h3> {points} points </h3>

        <img className='gameoverBG' src={background} alt='background' />
      </div>
      <ButtonLink
        img='../assets/GuessTheColor/playbutton.png'
        alt='play button'
        text='Retry'
        path='/guesscolor/play'
        className='playButton'
        onClick={() => window.location.reload()}
      ></ButtonLink>
      <ButtonLink
        img='../assets/GuessTheColor/playbutton.png'
        alt='play button'
        text='Back to home'
        path='/guesscolor'
        className='playButton'
      ></ButtonLink>
    </div>
  )
}

export default GameOver
