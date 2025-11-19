export const getNextCubeColor = (hue) => {
  console.log(hue);
  hue = (hue + 20) % 360;
  console.log(`hsl(${hue}, 70%, 80%)`);
  return `hsl(${hue}, 70%, 80%)`;
};
