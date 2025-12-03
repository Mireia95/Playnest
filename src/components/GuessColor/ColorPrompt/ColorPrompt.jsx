import './ColorPrompt.css'

const ColorPrompt = ({ color }) => {
  return (
    <div className='colorPrompt'>
      <p style={{ color: color.textColor }}>{color.text}</p>
    </div>
  )
}

export default ColorPrompt
