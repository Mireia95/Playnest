//funcion para color de los boxes
export const getNextBoxColor = () => {
  hue = (hue + 20) % 360
  return `hsl(${hue}, 70%, 80%)`
}

//funcion para mover el cubo en el eje X
export const moveBox = ({ box }) => {
  //necesito el box de referencia o poner position.x + speed
}
