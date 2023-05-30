import Sidebar from "./components/sidebar";
import "./assets/styles/style.css";
import { IoCubeSharp } from "react-icons/io5";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

function App() {
  function Cube(props) {
    const [ref] = useBox(() => ({ mass: 1, ...props }));
    return (
      <mesh castShadow ref={ref}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  }

  function Plane(props) {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
      ...props,
    }));
    return (
      <mesh receiveShadow ref={ref}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    );
  }

  const data = [
    {
      id: 1,
      name: "Cube 1",
      icon: <IoCubeSharp className="mr-2" />,
      element: <Cube position={[7, 8, 9]} />,
      locations: [
        {
          id: 1,
          name: "Location X",
          value: 70,
        },
        {
          id: 2,
          name: "Location Y",
          value: 80,
        },
        {
          id: 3,
          name: "Location Z",
          value: 90,
        },
      ],
      rotations: [
        {
          id: 1,
          name: "Rotation X",
          value: "70 m",
        },
        {
          id: 2,
          name: "Rotation Y",
          value: "80 m",
        },
        {
          id: 3,
          name: "Rotation Z",
          value: "90 m",
        },
      ],
      mode: [
        "Perspective",
        "Orthographic",
        "Panorama",
        "360",
        "Cubemap",
        "Equirectangular",
        "Fisheye",
        "Spherical",
        "Cylindrical",
        "Stereo",
        "Anaglyph",
      ],
      scales: [
        {
          id: 1,
          name: "Scale X",
          value: "70 m",
        },
        {
          id: 2,
          name: "Scale Y",
          value: "80 m",
        },
        {
          id: 3,
          name: "Scale Z",
          value: "90 m",
        },
      ],
    },
    {
      id: 2,
      name: "Cube 2",
      icon: <IoCubeSharp className="mr-2" />,
      locations: [
        {
          id: 1,
          name: "Location X",
          value: 40,
        },
        {
          id: 2,
          name: "Location Y",
          value: 50,
        },
        {
          id: 3,
          name: "Location Z",
          value: 60,
        },
      ],
      rotations: [
        {
          id: 1,
          name: "Rotation X",
          value: 120,
        },
        {
          id: 2,
          name: "Rotation Y",
          value: 75,
        },
        {
          id: 3,
          name: "Rotation Z",
          value: 20,
        },
      ],
      mode: [
        "Perspective",
        "Orthographic",
        "Panorama",
        "360",
        "Cubemap",
        "Equirectangular",
        "Fisheye",
        "Spherical",
        "Cylindrical",
        "Stereo",
        "Anaglyph",
      ],
      scales: [
        {
          id: 1,
          name: "Scale X",
          value: "40 m",
        },
        {
          id: 2,
          name: "Scale Y",
          value: "50 m",
        },
        {
          id: 3,
          name: "Scale Z",
          value: "60 m",
        },
      ],
    },
    {
      id: 3,
      name: "Cube 3",
      icon: <IoCubeSharp className="mr-2" />,
      locations: [
        {
          id: 1,
          name: "Location X",
          value: "10 m",
        },
        {
          id: 2,
          name: "Location Y",
          value: "20 m",
        },
        {
          id: 3,
          name: "Location Z",
          value: "30 m",
        },
      ],
      rotations: [
        {
          id: 1,
          name: "Rotation X",
          value: "10 m",
        },
        {
          id: 2,
          name: "Rotation Y",
          value: "20 m",
        },
        {
          id: 3,
          name: "Rotation Z",
          value: "30 m",
        },
      ],
      mode: [
        "Perspective",
        "Orthographic",
        "Panorama",
        "360",
        "Cubemap",
        "Equirectangular",
        "Fisheye",
        "Spherical",
        "Cylindrical",
        "Stereo",
        "Anaglyph",
      ],
      scales: [
        {
          id: 1,
          name: "Scale X",
          value: "10 m",
        },
        {
          id: 2,
          name: "Scale Y",
          value: "20 m",
        },
        {
          id: 3,
          name: "Scale Z",
          value: "30 m",
        },
      ],
    },
  ];
  const [selectedX, setSelectedX] = useState(-0.45); //-0.45
  const [selectedY, setSelectedY] = useState(10); //10
  const [selectedZ, setSelectedZ] = useState(0.25); //0.25

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);

  console.log(selectedX, selectedY, selectedZ);

  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App flex justify-between items-start">
      <div className="w-9/12">
        <Canvas
          className="min-h-screen canvas-holder"
          dpr={[1, 2]}
          shadows
          camera={{ position: [-5, 5, 5], fov: 50 }}
        >
          <ambientLight />
          <spotLight
            angle={0.25}
            penumbra={0.5}
            position={[10, 10, 5]}
            castShadow
          />
          <Physics>
            <Plane />
            {/* {ready && <Cube position={[selectedX, selectedY, selectedZ]} />} */}
            {ready && <Cube rotation={[rotationX, rotationY, rotationZ]} position={[selectedX, selectedY, selectedZ]} />}
          </Physics>
        </Canvas>
      </div>
      <Sidebar
        data={data}
        setSelectedX={setSelectedX}
        setSelectedY={setSelectedY}
        setSelectedZ={setSelectedZ}

        setRotationX={setRotationX}
        setRotationY={setRotationY}
        setRotationZ={setRotationZ}
      />
    </div>
  );
}

export default App;
