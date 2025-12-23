import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { ShaderFakeShadow } from '../../Shader'

const Crossroads = () => {
  const crossroadsStaticBase = useGLTF('/models/crossroads/static/base.glb')
  const floorShadow = useTexture('/models/crossroads/static/floorShadow.png')
  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace
  const matcapOrangeTexture = useTexture('/models/matcaps/orange.png')
  matcapOrangeTexture.colorSpace = THREE.SRGBColorSpace
  const matcapBrownTexture = useTexture('/models/matcaps/brown.png')
  matcapBrownTexture.colorSpace = THREE.SRGBColorSpace
  const matcapGrayTexture = useTexture('/models/matcaps/gray.png')
  matcapGrayTexture.colorSpace = THREE.SRGBColorSpace

  const matcaps = useMemo(
    () => ({
      white: matcapWhiteTexture,
      orange: matcapOrangeTexture,
      brown: matcapBrownTexture,
      gray: matcapGrayTexture,
    }),
    [matcapWhiteTexture, matcapOrangeTexture, matcapBrownTexture, matcapGrayTexture],
  )

  useEffect(() => {
    if (!crossroadsStaticBase.scene) return

    crossroadsStaticBase.scene.traverse((child: any) => {
      if (child.isMesh) {
        // floor
        if (child.name === 'floor007') {
          child.geometry = new THREE.PlaneGeometry()
          child.material = new ShaderFakeShadow({ transparent: true })
          child.material.uniforms.uTexture.value = floorShadow
        }

        // matcap
        const match = child.name.match(/^shade([a-z]+)/i)
        if (match) {
          const key = match[1].toLowerCase()
          child.material = new THREE.MeshMatcapMaterial({
            matcap: matcaps[key],
            toneMapped: false,
          })
        }
      }
    })
  }, [crossroadsStaticBase, floorShadow, matcaps])

  return <primitive object={crossroadsStaticBase.scene} rotation-x={-Math.PI / 2} position={[0, 0, 35]} />
}

export default Crossroads
