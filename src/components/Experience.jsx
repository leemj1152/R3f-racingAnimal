import { OrbitControls, useHelper, PerspectiveCamera } from "@react-three/drei";
import { Shiba } from "./obj/ShibaInu";
import { useRef } from "react";
import { Tree } from "./obj/Tree";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

const Offset_z = -20

const MovingItem = (props) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.position.z -= delta * 5;

    if (ref.current.position.z <= Offset_z) {
      ref.current.position.z = -Offset_z;
    }
  });

  return <group ref={ref}>{props.children}</group>
}

const Background = () => {
  const ref = useRef();

  return (
    <group position={[0, 0, 0]} ref={ref}>
      <MovingItem>
        <Tree position={[-5, 0, 0]}/>
      </MovingItem>
      <MovingItem>
        <Tree position={[5, 0, 0]}/>
      </MovingItem>
    </group>
  )
}

export const Experience = () => {
  const camera = useRef();
  useHelper(camera, THREE.CameraHelper)
  return (
    <>
    <ambientLight intensity={4}/>
    <PerspectiveCamera ref={camera} near={10} far={100} position={[-0, 20, -40]} makeDefault></PerspectiveCamera>
      <OrbitControls />
      <Background />
      <Shiba />
    </>
  );
};
