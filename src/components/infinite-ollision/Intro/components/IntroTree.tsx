import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { ShaderFakeShadow } from '../../Shader'

const IntroTree = () => {
  const introStaticBase = useGLTF('/models/intro/static/base.glb')
  const introStaticFloorShadow = useTexture('/models/intro/static/floorShadow.png')
  introStaticFloorShadow.colorSpace = THREE.SRGBColorSpace

  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace
  const matcapGreenTexture = useTexture('/models/matcaps/green.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace
  const matcapBrownTexture = useTexture('/models/matcaps/brown.png')
  matcapBrownTexture.colorSpace = THREE.SRGBColorSpace

  const matcaps = useMemo(
    () => ({ white: matcapWhiteTexture, green: matcapGreenTexture, brown: matcapBrownTexture }),
    [matcapWhiteTexture, matcapGreenTexture, matcapBrownTexture],
  )

  useEffect(() => {
    introStaticBase.scene.traverse((child: any) => {
      if (child.isMesh) {
        if (child.name === 'floor003') {
          child.geometry = new THREE.PlaneGeometry()
          child.material = new ShaderFakeShadow({ transparent: true })
          child.material.uniforms.uTexture.value = introStaticFloorShadow
        }

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
  }, [])

  return (
    <>
      <primitive object={introStaticBase.scene} rotation-x={-Math.PI / 2} />
    </>
  )
}

export default IntroTree
