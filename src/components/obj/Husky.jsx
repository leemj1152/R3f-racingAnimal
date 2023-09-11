/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models./models/Husky.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Husky(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Husky.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="AnimalArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.IKBackLegL} />
            <primitive object={nodes.IKFrontLegL} />
            <primitive object={nodes.IKBackLegR} />
            <primitive object={nodes.IKFrontLegR} />
          </group>
          <group name="Cube" position={[0, 0, 0.062]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials.Material} skeleton={nodes.Cube_1.skeleton} />
            <skinnedMesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials['Material.001']} skeleton={nodes.Cube_2.skeleton} />
            <skinnedMesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials['Material.006']} skeleton={nodes.Cube_3.skeleton} />
            <skinnedMesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials['Material.003']} skeleton={nodes.Cube_4.skeleton} />
            <skinnedMesh name="Cube_5" geometry={nodes.Cube_5.geometry} material={materials['Material.002']} skeleton={nodes.Cube_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Husky.glb')