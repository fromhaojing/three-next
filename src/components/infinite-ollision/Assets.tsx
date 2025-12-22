'use client'

import { useGLTF, useTexture } from '@react-three/drei'

const Assets = () => {
  useGLTF.preload('/models/intro/static/base.glb')
  useGLTF.preload('/models/intro/static/collision.glb')
  useGLTF.preload('/models/brick/base.glb')
   useTexture.preload('/models/intro/static/floorShadow.png')

  useGLTF.preload('/models/crossroads/static/base.glb')
  useTexture.preload('/models/crossroads/static/floorShadow.png')
 
  useTexture.preload('/models/matcaps/white.png')
  useTexture.preload('/models/matcaps/orange.png')
  useTexture.preload('/models/matcaps/brown.png')
  useTexture.preload('/models/matcaps/gray.png')
  return null
}
export default Assets
