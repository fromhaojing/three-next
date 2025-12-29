'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'

export default function Scene({ ...props }) {
  return (
    <>
      <Canvas className='pointer-events-auto' {...props} dpr={[1, 2]} camera={{ position: [10, 10, 10] }}>
        <axesHelper args={[5]} />
        <r3f.Out />
        <Preload all />
      </Canvas>
    </>
  )
}
