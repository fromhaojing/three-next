import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { FakeShadow } from '../../Shader'

const IntroTree = () => {
  const introStaticBase = useGLTF('/models/intro/static/base.glb')
  const introStaticFloorShadow = useTexture('/models/intro/static/floorShadow.png')
  introStaticFloorShadow.colorSpace = THREE.SRGBColorSpace
  const { nodes } = introStaticBase

  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace
  const matcapGreenTexture = useTexture('/models/matcaps/green.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace
  const matcapBrownTexture = useTexture('/models/matcaps/brown.png')
  matcapBrownTexture.colorSpace = THREE.SRGBColorSpace

  const matcaps = { white: matcapWhiteTexture, green: matcapGreenTexture, brown: matcapBrownTexture }

  const fakeShadowTef = useRef(null)

  useEffect(() => {
    if (fakeShadowTef.current) {
      fakeShadowTef.current.uniforms.uTexture.value = introStaticFloorShadow
    }
  }, [])

  return (
    <>
      <group rotation-x={-Math.PI / 2}>
        {Object.values(nodes).map((node: any) => {
          if (!node.isMesh) return null
          if (node.name === 'floor003') {
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

export default IntroTree
