import './InitGame.css'

const InitGame = () => {
  console.log('soy InitGame y me renderizo')
  return (
    <>
      <img className='title' src='./assets/MemoryGame/MemoryGameTitle.png' />
      <h3>
        Flip the cards and find all matching pairs using the fewest moves
        possible. You only have 60 seconds available, so harry up!
      </h3>
    </>
  )
}

export default InitGame
