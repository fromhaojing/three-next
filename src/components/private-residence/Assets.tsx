'use client'

import { useGLTF, useTexture } from '@react-three/drei'

const Assets = () => {
  // useGLTF.preload('/private-residence/models/grass_hight.glb')
  // useGLTF.preload('/private-residence/models/grass_low.glb')
  useTexture.preload('/private-residence/textures/gravel.jpg')
  useTexture.preload('/private-residence/textures/beige_wall.jpg')

  return null
}
export default Assets
