import { OrbitControls, useHelper, PerspectiveCamera } from "@react-three/drei";
import { Shiba } from "./obj/ShibaInu";
import { Bull } from "./obj/Bull";
import { Cow } from "./obj/Cow";
import { useRef } from "react";
import { Deer } from "./obj/Deer";
import { Donkey } from "./obj/Donkey";
import { Fox } from "./obj/Fox";
import { Horse } from "./obj/Horse";
import { Husky } from "./obj/Husky";
import { Stag } from "./obj/Stag";
import { Wolf } from "./obj/Wolf";
import { WhiteHorse } from "./obj/WhiteHorse";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { Road } from "./obj/Road";

const Offset_z = -20

// const MovingItem = (props) => {
//   const ref = useRef();

//   useFrame((_state, delta) => {
//     ref.current.position.z -= delta * 5;

//     if (ref.current.position.z <= Offset_z) {
//       ref.current.position.z = -Offset_z;
//     }
//   });

//   return <group ref={ref}>{props.children}</group>
// }

// const Background = () => {
//   const ref = useRef();

//   return (
//     <group position={[0, 0, 0]} ref={ref}>
//       <MovingItem>
//         <Tree position={[-5, 0, 0]}/>
//       </MovingItem>
//       <MovingItem>
//         <Tree position={[5, 0, 0]}/>
//       </MovingItem>
//     </group>
//   )
// }

export const Experience = () => {
  const camera = useRef();
  useHelper(camera, THREE.CameraHelper)
  return (
    <>
    <ambientLight intensity={4}/>
    <PerspectiveCamera ref={camera} near={10} far={1000} position={[-0, 10, -40]} makeDefault></PerspectiveCamera>
      <OrbitControls />
      <Road position={[0, -5, 113]} scale={5}/>
      <Stag position={[-18, 0, 0]}/>
      <Horse position={[-15, 0, 0]}/>
      <Husky position={[-11.5, 0, 0]}/>
      <Wolf position={[-7.5, 0, 0]}/>
      <WhiteHorse position={[-3.5, 0, 0]}/>
      <Shiba />
      <Fox position={[3.5, 0, 0]}/>
      <Bull position={[7.5, 0, 0]} />
      <Cow position={[11.5, 0, 0]} />
      <Deer position={[15, 0, 0]}/>
      <Donkey position={[18, 0, 0]}/>
      
    </>
  );
};
