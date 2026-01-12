'use client'
import { Sky } from '@react-three/drei'
import { TerrainShader } from './Shader'

const MountainWater = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Sky distance={450000} sunPosition={[100, 20, 100]} mieCoefficient={0.005} mieDirectionalG={0.8} />
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10, 500, 500]} />
        <TerrainShader />
      </mesh>
    </>
  )
}

export default MountainWater
