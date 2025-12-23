// @ts-nocheck
import { forwardRef, useRef, useImperativeHandle } from 'react'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import fragment from './fragment.glsl'
import vertex from './vertex.glsl'

const ShaderFakeShadow = shaderMaterial(
  {
    uTexture: null,
  },
  vertex,
  fragment,
)
extend({ ShaderFakeShadow })

const FakeShadow = forwardRef((props, ref) => {
  const localRef = useRef<THREE.ShaderMaterial>(null)

  useImperativeHandle(ref, () => localRef.current)
  return <shaderFakeShadow ref={localRef} {...props} attach='material' transparent />
})

export { ShaderFakeShadow }
export default FakeShadow
