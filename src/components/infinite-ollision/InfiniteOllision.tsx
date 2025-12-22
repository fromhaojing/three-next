'use client'
import { Floor, FullscreenQuad, Assets } from '.'
import { Physics } from '@react-three/rapier'

const InfiniteOllision = () => {
  return (
    <>
      <axesHelper args={[10]} />
      <Assets />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <FullscreenQuad />
      <Physics debug>
        <Floor />
      </Physics>
    </>
  )
}

export default InfiniteOllision
