import BackLink from '../../General/BackLink/BackLink'
import ButtonLink from '../ButtonLink/ButtonLink'
import './InitGame.css'

const InitGame = () => {
  return (
    <>
      <div className='guessTheColorTitle'>
        <img
          src='./assets/GuessTheColor/GuessTheColorTitle.svg'
          alt='guess the color title'
        />{' '}
      </div>

      <h2> How to play</h2>
      <p> Read the word on the screen and choose the correct color. </p>
      <ButtonLink
        img='./assets/GuessTheColor/playbutton.png'
        alt='play button'
        text=''
        path='/guesscolor/play'
        className='playButton'
      ></ButtonLink>
      <div className='imageBGcolors'>
        <img
          src='./assets/GuessTheColor/GuessTheColorBG.png'
          alt='imagen de fondo'
        />{' '}
      </div>

      <BackLink />
    </>
  )
}

export default InitGame
