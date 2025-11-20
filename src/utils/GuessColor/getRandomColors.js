export const getRandomColors = (array) => {
  let randomColors = [];
  while (randomColors.length < 4) {
    const randomPos = Math.floor(Math.random() * array.length);
    //check si hay duplicados
    !randomColors.includes(array[randomPos])
      ? randomColors.push(array[randomPos])
      : null;
  }
  return randomColors;
};
