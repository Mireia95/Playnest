import BackLink from '../BackLink/BackLink'
import ButtonLink from '../ButtonLink/ButtonLink'
import RetryLink from '../RetryLink/RetryLink'
import './GameOver.css'

const GameOver = ({ points = 0, general = false, path }) => {
  const starEmpty = '../assets/GuessTheColor/starEmpty.svg'
  const starFull = '../assets/GuessTheColor/starFull.svg'

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
                <img src={points < 50 ? starEmpty : starFull} alt='star' />
                <img src={points < 140 ? starEmpty : starFull} alt='star' />
              </div>
              <h3> {points} points </h3>
            </>
          ) : null}
        </div>
        <RetryLink path={path} />

        <BackLink />
      </div>
    </>
  )
}

export default GameOver
