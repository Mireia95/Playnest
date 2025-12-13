import { BOX_HEIGHT } from '../../utils/StackGame/constants'

//funcion para mover el cubo en el eje X
export const moveBox = ({ box }) => {
  //necesito el box de referencia o poner position.x + speed
}

export const createNewBox = ({ boxes, hueColorBox, dispatch }) => {
  const prevBox = boxes[boxes.length - 1]

  const newHueColor = (hueColorBox + 20) % 360 //new color for next box

  //create new box
  const newBox = {
    id: prevBox.id + 1,
    moving: true,
    color: `hsl(${hueColorBox}, 70%, 80%)`,
    posY: prevBox.posY + BOX_HEIGHT
  }

  dispatch({ type: 'CREATE_NEW_BOX', payload: { newHueColor, newBox } })
}
