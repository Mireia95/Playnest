import { useState } from 'react'
import CardsColorDiv from '../CardsColorDiv/CardsColorDiv'
import './PlayGame.css'
import { useEffect } from 'react'
import GameOver from '../GameOver/GameOver'
import Timer from '../Timer/Timer'
import ColorPrompt from '../ColorPrompt/ColorPrompt'

const PlayGame = () => {
  useEffect(() => {
    /*   const newArray = getRandomColors(colors);
    setColorText(newArray.text); */
  }, [])

  return (
    <>
      <div className='infoBar'>
        <Timer />
        <h2 className='points'> points </h2>
      </div>
      <ColorPrompt />
      <CardsColorDiv text={'green'} />
      <GameOver />
    </>
  )
}

export default PlayGame
