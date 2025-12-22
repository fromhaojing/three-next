'use client'

import { useGLTF, useTexture } from '@react-three/drei'

const Assets = () => {
  useGLTF.preload('/models/intro/static/base.glb')
  useGLTF.preload('/models/intro/static/collision.glb')
  useGLTF.preload('/models/brick/base.glb')
  useTexture.preload('/models/intro/static/floorShadow.png')
  useTexture.preload('/models/matcaps/white.png')
  return null
}
export default Assets
