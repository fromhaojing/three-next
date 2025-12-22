// @ts-nocheck
import { forwardRef, useRef, useImperativeHandle } from 'react'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import fragment from './fragment.glsl'
import vertex from './vertex.glsl'

const Shader = shaderMaterial(
  {
    uBackground: null,
  },
  vertex,
  fragment,
)
extend({ Shader })

const FullscreenQuasShader = forwardRef((props, ref) => {
  const localRef = useRef<THREE.ShaderMaterial>(null)

  useImperativeHandle(ref, () => localRef.current)
  return <shader ref={localRef} {...props} attach='material' />
})

export default FullscreenQuasShader
