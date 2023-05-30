// import { useEffect, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Physics, usePlane, useBox } from '@react-three/cannon'

// function Plane(props) {
//   const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
//   return (
//     <mesh receiveShadow ref={ref}>
//       <planeGeometry args={[1000, 1000]} />
//       <meshStandardMaterial color="#f0f0f0" />
//     </mesh>
//   )
// }

// function Cube(props) {
//   const [ref] = useBox(() => ({ mass: 1, ...props }))
//   return (
//     <mesh castShadow ref={ref}>
//       <boxGeometry />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   )
// }

// export default function Main({ selectedX, selectedY, selectedZ}) {
//   const [ready, setReady] = useState(false)
//   useEffect(() => {
//     const timeout = setTimeout(() => setReady(true), 100)
//     return () => clearTimeout(timeout)
//   }, [])
//   return (
//     <Canvas className='min-h-screen canvas-holder' dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
//       <ambientLight />
//       <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
//       <Physics>
//         <Plane />
//         <Cube position={[-.4, 30, 0.15]} />
//         {ready && <Cube position={[selectedX, selectedY, selectedZ]} />}
//       </Physics>
//     </Canvas>
//   )
// }
