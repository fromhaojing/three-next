'use client'

import { useEffect, useMemo } from 'react'
import { useTexture, useGLTF, Center } from '@react-three/drei'
import { FirstPersonController, Floor, RainLines } from '.'
import { Physics } from '@react-three/rapier'
import * as THREE from 'three'
import { chairList } from './utils'
import { useBindMaterialByName, useBuildingMaterial } from './hooks'

const GameRoom = () => {
  const gameroom = useGLTF('/interior-lighting/models/gameroom.glb')
console.log(gameroom);

  const { redBrickMaterial } = useBuildingMaterial()
  useBindMaterialByName(gameroom.scene, {
    Material2016: { isUv2: true, material: redBrickMaterial },
    // Material3005: { isUv2: true, material: redBrickMaterial },
  })

  return (
    <Physics>
      <Center>
        <primitive object={gameroom.scene} />
      </Center>
      <FirstPersonController />
      <Floor />
      <RainLines />
    </Physics>
  )
}

export default GameRoom
