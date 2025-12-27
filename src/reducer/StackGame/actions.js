import { BOX_HEIGHT } from '../../utils/StackGame/constants';

export const nextLevel = ({ dispatch }) => {
  dispatch({ type: 'NEXT_LEVEL' });
};

export const createNewBox = ({ boxes, hueColorBox, xSpeed, dispatch }) => {
  const prevBox = boxes[boxes.length - 1];

  prevBox.moving = false; //paro el movimiento del box anterior

  const newHueColor = (hueColorBox + 20) % 360; //new color for next box

  xSpeed = xSpeed + 0.01; //add more speed for next box

  //create new box
  const newBox = {
    id: prevBox.id + 1,
    moving: true,
    color: `hsl(${hueColorBox}, 70%, 80%)`,
    width: 2, //!corregir segun debris
    posX: -2, //que empieze mas a la izquierda
    posY: prevBox.posY + BOX_HEIGHT
  };

  dispatch({
    type: 'CREATE_NEW_BOX',
    payload: { newHueColor, newBox, xSpeed }
  });
};

export const checkBoxCollision = ({ boxes }) => {
  const movingBox = boxes[boxes.length - 1];
  const prevBox = boxes[boxes.length - 2];

  console.log(movingBox);
};
