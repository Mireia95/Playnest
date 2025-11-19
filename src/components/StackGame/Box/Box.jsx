import { getNextCubeColor } from '../../../utils/StackGame/getNextCubeColor';

const Box = ({ hueColor, setHueColor }) => {
  let newHue = getNextCubeColor(hueColor);

  console.log(newHue);

  return (
    <>
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color={newHue} />
      </mesh>
    </>
  );
};

export default Box;
