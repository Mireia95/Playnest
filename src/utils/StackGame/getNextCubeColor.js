export const getNextCubeColor = ({ hue, dipatch }) => {
  hue = (hue + 20) % 360

  return `hsl(${hue}, 70%, 80%)`
}
