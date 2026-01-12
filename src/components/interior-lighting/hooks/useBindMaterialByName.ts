import * as THREE from 'three'
import { useEffect } from 'react'

const useBindMaterialByName = (
  scene: THREE.Object3D,
  materialMap: Record<string, { isUv2: true; material: THREE.Material }>,
) => {
  useEffect(() => {
    scene.traverse((child: THREE.Mesh) => {
      const result = materialMap[child.name]
      if (child.isMesh && result) {
        child.material = result.material
        if (result.isUv2) {
          child.geometry.setAttribute('uv2', child.geometry.attributes.uv.clone())
        }
      }
    })
  }, [scene])
}
export default useBindMaterialByName
