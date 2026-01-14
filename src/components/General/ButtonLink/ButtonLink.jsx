import { Link } from 'react-router-dom'
import './ButtonLink.css'

const ButtonLink = ({ img, alt = '', text = '', path, className, onClick }) => {
  return (
    <Link className={className} to={path} onClick={onClick}>
      {img ? <img src={img} alt={alt} /> : null}
      <span> {text} </span>
    </Link>
  )
}

export default ButtonLink
