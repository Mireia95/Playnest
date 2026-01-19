import BackLink from '../BackLink/BackLink'
import ButtonLink from '../ButtonLink/ButtonLink'
import RetryLink from '../RetryLink/RetryLink'
import './WinGame.css'

const WinGame = ({ path }) => {
  return (
    <>
      <div id='overlay' />
      <div className='winDiv'>
        <div>
          <h2> You win! </h2>
        </div>
        <RetryLink path={path} />

        <BackLink />
      </div>
    </>
  )
}

export default WinGame
