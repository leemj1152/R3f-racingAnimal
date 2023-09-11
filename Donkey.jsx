/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/Donkey.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Donkey.glb')
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
          <group name="Donkey" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Donkey_1" geometry={nodes.Donkey_1.geometry} material={materials.Main_Light} skeleton={nodes.Donkey_1.skeleton} />
            <skinnedMesh name="Donkey_2" geometry={nodes.Donkey_2.geometry} material={materials.Main} skeleton={nodes.Donkey_2.skeleton} />
            <skinnedMesh name="Donkey_3" geometry={nodes.Donkey_3.geometry} material={materials.Hair} skeleton={nodes.Donkey_3.skeleton} />
            <skinnedMesh name="Donkey_4" geometry={nodes.Donkey_4.geometry} material={materials.Muzzle} skeleton={nodes.Donkey_4.skeleton} />
            <skinnedMesh name="Donkey_5" geometry={nodes.Donkey_5.geometry} material={materials.Hooves} skeleton={nodes.Donkey_5.skeleton} />
            <skinnedMesh name="Donkey_6" geometry={nodes.Donkey_6.geometry} material={materials.Main_Dark} skeleton={nodes.Donkey_6.skeleton} />
            <skinnedMesh name="Donkey_7" geometry={nodes.Donkey_7.geometry} material={materials.Eye_Dark} skeleton={nodes.Donkey_7.skeleton} />
            <skinnedMesh name="Donkey_8" geometry={nodes.Donkey_8.geometry} material={materials.Eye_White} skeleton={nodes.Donkey_8.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Donkey.glb')
