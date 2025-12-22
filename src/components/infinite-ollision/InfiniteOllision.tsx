'use client'

import { Floor, FullscreenQuad, Intro, Assets } from '.'
import { Physics } from '@react-three/rapier'

const InfiniteOllision = () => {

  return (
    <>
    <axesHelper args={[10]}/>
      <Assets />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <FullscreenQuad />
      <Physics>
        <Floor />
        <Intro />
      </Physics>
    </>
  )
}

export default InfiniteOllision
