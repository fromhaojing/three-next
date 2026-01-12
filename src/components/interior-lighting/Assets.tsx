'use client'

import { useGLTF, useTexture } from '@react-three/drei'

const Assets = () => {
  useGLTF.preload('/interior-lighting/models/gameroom.glb')

  useTexture.preload([
    '/interior-lighting/textures/red_brick/map.jpg',
    '/interior-lighting/textures/red_brick/aoMap.jpg',
    '/interior-lighting/textures/red_brick/normalMap.jpg',
    '/interior-lighting/textures/red_brick/roughMap.jpg',
    '/interior-lighting/textures/red_brick/displacementMap.jpg',
  ])

  return null
}
export default Assets
