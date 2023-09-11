/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models./models/Stag.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Stag(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Stag.glb')
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
          <group name="Stag" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Stag_1" geometry={nodes.Stag_1.geometry} material={materials['Material.003']} skeleton={nodes.Stag_1.skeleton} />
            <skinnedMesh name="Stag_2" geometry={nodes.Stag_2.geometry} material={materials.Material} skeleton={nodes.Stag_2.skeleton} />
            <skinnedMesh name="Stag_3" geometry={nodes.Stag_3.geometry} material={materials['Material.010']} skeleton={nodes.Stag_3.skeleton} />
            <skinnedMesh name="Stag_4" geometry={nodes.Stag_4.geometry} material={materials['Material.001']} skeleton={nodes.Stag_4.skeleton} />
            <skinnedMesh name="Stag_5" geometry={nodes.Stag_5.geometry} material={materials['Material.011']} skeleton={nodes.Stag_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Stag.glb')