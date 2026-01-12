import * as THREE from 'three'
import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'

const useBuildingMaterial = () => {
  const red_brick = useTexture({
    map: '/interior-lighting/textures/red_brick/map.jpg',
    aoMap: '/interior-lighting/textures/red_brick/aoMap.jpg',
    normalMap: '/interior-lighting/textures/red_brick/normalMap.jpg',
    roughnessMap: '/interior-lighting/textures/red_brick/roughMap.jpg',
    displacementMap: '/interior-lighting/textures/red_brick/displacementMap.jpg',
  })
  red_brick.map.colorSpace = THREE.SRGBColorSpace

  const redBrickMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: red_brick.map,
        aoMap: red_brick.aoMap,
        normalMap: red_brick.normalMap,
        roughnessMap: red_brick.roughnessMap,
        displacementMap: red_brick.displacementMap,
      }),
    [],
  )

  return {
    redBrickMaterial,
  }
}
export default useBuildingMaterial
