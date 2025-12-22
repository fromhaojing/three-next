import { useEffect, useRef } from 'react'
import { Wall } from './'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { FakeShadow } from './Shader/'

const Intro = () => {
  const introStaticBase = useGLTF('/models/intro/static/base.glb')
  const introStaticFloorShadow = useTexture('/models/intro/static/floorShadow.png')
  introStaticFloorShadow.colorSpace = THREE.SRGBColorSpace
  const { nodes } = introStaticBase

  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  const matcapGreenTexture = useTexture('/models/matcaps/green.png')
  const matcapBrownTexture = useTexture('/models/matcaps/brown.png')
  const matcaps = { white: matcapWhiteTexture, green: matcapGreenTexture, brown: matcapBrownTexture }

  const fakeShadowTef = useRef(null)

  useEffect(() => {
    if (fakeShadowTef.current) {
      console.log(fakeShadowTef.current);
      
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
                {/* <meshBasicMaterial
                  color={0xffffff}
                  alphaMap={introStaticFloorShadow}
                  transparent={true}
                  blending={THREE.MultiplyBlending}
                /> */}
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

      <Wall position={[-12.95, 0, -3.75]} rowCounts={[3, 2]} />
      <Wall position={[-15, 0, -2]} rotation={[0, Math.PI / 2, 0]} rowCounts={[4, 3]} />
      <Wall position={[-15, 0, 3]} rotation={[0, Math.PI / 2, 0]} rowCounts={[3, 2]} />
      <Wall position={[-12, 0, 15]} rotation={[0, Math.PI / 2, 0]} rowCounts={[5, 4]} />
      <Wall position={[12.95, 0, -3.75]} rowCounts={[2, 1]} />
      <Wall position={[15, 0, -2]} rotation={[0, Math.PI / 2, 0]} rowCounts={[4, 3]} />
    </>
  )
}

export default Intro
