import Box from '../Box/Box';
import './BoxesAll.css';

const BoxesAll = ({ dispatch, boxes, xSpeed }) => {
  //!eliminare dispatch se non lo uso
  return (
    <>
      {boxes.map((box) => {
        return <Box box={box} xSpeed={xSpeed} />;
      })}
    </>
  );
};

export default BoxesAll;
