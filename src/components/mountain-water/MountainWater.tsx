'use client'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { TerrainShader, DepthMaterial } from './Shader'
import * as THREE from 'three'

const tileSize = 200

const MountainWater = () => {
  const terrainRef = useRef<THREE.Mesh>(null)

  const terrainGeometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(tileSize, tileSize, 256, 256)
    g.rotateX(-Math.PI / 2)
    g.deleteAttribute('normal')
    g.deleteAttribute('uv')
    return g
  }, [])

  //   useFrame(({ camera }) => {
  //   if (terrainRef.current) {
  //     terrainRef.current.position.x = Math.floor(camera.position.x / tileSize) * tileSize
  //     terrainRef.current.position.z = Math.floor(camera.position.z / tileSize) * tileSize
  //   }
  // })

  return (
    <>
      <Environment files='/mountain-water/spruit_sunrise.hdr' background backgroundBlurriness={0.5} />
      <directionalLight
        color='#ffffff'
        castShadow
        intensity={2}
        position={[6.25, 3, 4]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <mesh castShadow receiveShadow ref={terrainRef}>
        <primitive object={terrainGeometry} attach='geometry' />
        <TerrainShader attach='material' />
        <DepthMaterial attach='customDepthMaterial' />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position-y={-0.1}>
        <planeGeometry args={[10, 10, 1, 1]} />
        <meshPhysicalMaterial transmission={1} roughness={0.3} />
      </mesh>
    </>
  )
}

export default MountainWater
