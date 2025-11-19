const ThreeScene = () => {
  //ref para montar ThreeScene solo en el div
  const mountRef = useRef();

  //estados
  const [gameover, setGameOver] = useState(false);

  //montamos la ThreeScene
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f0f0');

    /* properties:
    75: field of view: FOV, value in degrees - the extend of the scene that is seen on the display.
    AspectRatio: width / height
    0.1: near clipping plane
    1000: far clipping plane
    */
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    //!prueba posicion camara
    camera.position.set(5, 3, 5);
    //!apuntar al centro (donde está el cubo)
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );

    //<canvas> element
    mountRef.current.appendChild(renderer.domElement);

    //creo cubo (width, height, depth) , o sea x,y,z
    const geometry = new THREE.BoxGeometry(2, 0.5, 2);
    const material = new THREE.MeshBasicMaterial({
      color: getNextCubeColor({ hue: hue })
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = -2;
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      renderer.render(scene, camera);
      //cube.rotation.x += 0.01
      //cube.rotation.y += 0.01
    }
    renderer.setAnimationLoop(animate);
  });

  return (
    <div ref={mountRef} className='scene'>
      <StartGame onClick={}/>
      <BackLink />
      {/*   <div id='info'>
        <Info />
      </div> */}
    </div>
  );
};
