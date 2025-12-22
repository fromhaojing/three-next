import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { FakeShadow } from '../../Shader'

const Crossroads = () => {
  const crossroadsStaticBase = useGLTF('/models/crossroads/static/base.glb')
  const { nodes } = crossroadsStaticBase
  const floorShadow = useTexture('/models/crossroads/static/floorShadow.png')
  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace
  const matcapOrangeTexture = useTexture('/models/matcaps/orange.png')
  matcapOrangeTexture.colorSpace = THREE.SRGBColorSpace
  const matcapBrownTexture = useTexture('/models/matcaps/brown.png')
  matcapBrownTexture.colorSpace = THREE.SRGBColorSpace
  const matcapGrayTexture = useTexture('/models/matcaps/gray.png')
  matcapGrayTexture.colorSpace = THREE.SRGBColorSpace

  const matcaps = {
    white: matcapWhiteTexture,
    orange: matcapOrangeTexture,
    brown: matcapBrownTexture,
    gray: matcapGrayTexture,
  }

  const fakeShadowTef = useRef(null)

  useEffect(() => {
    if (fakeShadowTef.current) {
      fakeShadowTef.current.uniforms.uTexture.value = floorShadow
    }
  }, [])

  return (
    <>
      <group rotation-x={-Math.PI / 2} position={[0, 0, 35]}>
        {Object.values(nodes).map((node: any) => {
          if (!node.isMesh) return null
          if (node.name === 'floor007') {
            return (
              <mesh key={node.uuid} position={node.position} rotation={node.rotation} scale={node.scale}>
                <planeGeometry />
                <FakeShadow ref={fakeShadowTef} />
              </mesh>
            )
          }

          const match = node.name.match(/^shade([a-z]+)/i)
          if (!match) return null
          const key = match[1].toLowerCase()

          return (
            <mesh
              key={node.uuid}
              geometry={node.geometry}
              position={node.position}
              rotation={node.rotation}
              scale={node.scale}
            >
              <meshMatcapMaterial matcap={matcaps[key]} toneMapped={false} />
            </mesh>
          )
        })}
      </group>
    </>
  )
}

export default Crossroads
