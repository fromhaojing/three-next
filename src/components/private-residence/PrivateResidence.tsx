'use client'
import { Assets, Courtyard } from '.'
import { Sky } from '@react-three/drei'

const PrivateResidence = () => {
  return (
    <>
      <Assets />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Sky distance={450000} sunPosition={[100, 20, 100]} mieCoefficient={0.005} mieDirectionalG={0.8} />
      <Courtyard />
    </>
  )
}

export default PrivateResidence
