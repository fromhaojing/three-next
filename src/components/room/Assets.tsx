'use client'

import { useGLTF, useTexture } from '@react-three/drei'

const Assets = () => {
  // roomModel
  useGLTF.preload('/room/models/roomModel.glb')
  useTexture.preload('/room/textures/bakedDay.jpg')
  useTexture.preload('/room/textures/bakedNeutral.jpg')
  useTexture.preload('/room/textures/bakedNight.jpg')
  useTexture.preload('/room/textures/lightMap.jpg')

  // googleHomeLedsModel
  useGLTF.preload('/room/models/googleHomeLedsModel.glb')
  useTexture.preload('/room/textures/googleHomeLedMask.png')

  // topChairModel
  useGLTF.preload('/room/models/topChairModel.glb')

  return null
}
export default Assets
