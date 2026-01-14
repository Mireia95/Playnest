import ButtonLink from '../ButtonLink/ButtonLink'
import './GameOver.css'

const GameOver = ({ points = 0, general = false, path, homePath }) => {
  const starEmpty = '../assets/GuessTheColor/starEmpty.svg'
  const starFull = '../assets/GuessTheColor/starFull.svg'
  const background = '../assets/GuessTheColor/GameOverBG.svg'

  return (
    <>
      <div id='overlay' />
      <div className='gameoverDiv'>
        <div className='gameover'>
          <h2>Game Over </h2>
          {!general ? (
            <>
              <div className='stars'>
                <img src={starFull} alt='star' />
                <img src={points < 10 ? starEmpty : starFull} alt='star' />
                <img src={points < 30 ? starEmpty : starFull} alt='star' />
              </div>
              <h3> {points} points </h3>
            </>
          ) : null}

          <img className='gameoverBG' src={background} alt='background' />
        </div>
        <ButtonLink
          img='../assets/GuessTheColor/refreshIcon.svg'
          alt='retry'
          text='Retry'
          path={path}
          className='playButton'
          onClick={() => window.location.reload()}
        ></ButtonLink>
        <ButtonLink
          img='../assets/GuessTheColor/playbutton.png'
          alt='home'
          text='Back to home'
          path={homePath}
          className='playButton'
        ></ButtonLink>
      </div>
    </>
  )
}

export default GameOver
