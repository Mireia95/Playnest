import Box from '../Box/Box';
import './BoxesAll.css';
import { useCameraControl } from '../../../hooks/StackGame/useCamaraControl';

const BoxesAll = ({ boxes, xSpeed, cameraY }) => {
  //controlo la cámara aqui porque tiene que ser dentro un hijo del canvas
  useCameraControl({ cameraY });

  return (
    <>
      {boxes.map((box) => {
        return <Box box={box} xSpeed={xSpeed} />;
      })}
    </>
  );
};

export default BoxesAll;
