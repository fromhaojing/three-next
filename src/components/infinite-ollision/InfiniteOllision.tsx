'use client'
import { Floor, Assets, Intro, Crossroads } from '.'
import FullscreenQuad from "@/common/FullScreenQuad";
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
        <Intro />
        <Crossroads />
      </Physics>
    </>
  )
}

export default InfiniteOllision
