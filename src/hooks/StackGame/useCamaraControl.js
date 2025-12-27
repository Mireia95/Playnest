import { useThree } from '@react-three/fiber';

export const useCamaraControl = () => {
  const { camera } = useThree();

  console.log(camera);
};
