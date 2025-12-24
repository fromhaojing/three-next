import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { ShaderFakeShadow } from '../../Shader'

const Base = () => {
  const collisionStaticBase = useGLTF('/models/crossroads/static/collision.glb')

  return <primitive object={collisionStaticBase.scene}   />
}

export default Base
