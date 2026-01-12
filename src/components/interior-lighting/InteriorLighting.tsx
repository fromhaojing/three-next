'use client'
import { Assets } from '.'
import { KeyboardControls } from '@react-three/drei'
import FullscreenQuad from '@/common/FullScreenQuad'
import { GameRoom } from './'
import { keyMap } from './utils'

const InteriorLighting = () => {
  return (
    <KeyboardControls map={keyMap}>
      <Assets />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <GameRoom />
      <FullscreenQuad />
    </KeyboardControls>
  )
}

export default InteriorLighting
