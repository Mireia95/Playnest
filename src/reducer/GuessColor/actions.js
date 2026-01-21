//set random colors to set colors options and color to choose
export const setRandomColors = (array, dispatch) => {
  let randomColors = [];
  while (randomColors.length < 4) {
    const randomPos = Math.floor(Math.random() * array.length);
    //check si hay duplicados
    !randomColors.includes(array[randomPos])
      ? randomColors.push(array[randomPos])
      : null;
  }
  dispatch({ type: 'SET_COLOR_OPTIONS', payload: randomColors });

  //set colorPrint
  setColorPrint(randomColors, dispatch);
};

const setColorPrint = (array, dispatch) => {
  let randomColorPos01 = Math.floor(Math.random() * array.length);
  let randomColorPos02 = Math.floor(Math.random() * array.length);

  let colorPrint = {
    textColor: array[randomColorPos01].textColor,
    text: array[randomColorPos02].text
  };
  dispatch({ type: 'SET_COLOR_PRINT', payload: colorPrint });
};

export const compareColors = ({ colorSelected, colorPrint, dispatch }) => {
  if (colorSelected.text === colorPrint.text) {
    dispatch({ type: 'SUM_POINTS' });
  } else {
    dispatch({ type: 'REMOVE_LIFE' });
  }
};
