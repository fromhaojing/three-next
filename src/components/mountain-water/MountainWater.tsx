'use client'
import { useMemo } from 'react'
import { Environment } from '@react-three/drei'
import { TerrainShader, DepthMaterial } from './Shader'
import * as THREE from 'three'

const MountainWater = () => {
  const terrainGeometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(10, 10, 500, 500)
    g.rotateX(-Math.PI / 2)
    g.deleteAttribute('normal')
    g.deleteAttribute('uv')
    return g
  }, [])

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
      <mesh castShadow receiveShadow>
        <primitive object={terrainGeometry} attach='geometry' />
        <TerrainShader attach='material' />
        <DepthMaterial attach='customDepthMaterial' />
      </mesh>
    </>
  )
}

export default MountainWater
