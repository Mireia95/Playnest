import ButtonLink from '../ButtonLink/ButtonLink'
import './RetryLink.css'

const RetryLink = ({ path }) => {
  return (
    <ButtonLink
      img='../assets/refreshIcon.svg'
      alt='retry'
      path={path}
      className='retryButt'
      onClick={() => window.location.reload()}
    ></ButtonLink>
  )
}

export default RetryLink
