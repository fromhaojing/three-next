// @ts-nocheck
import { forwardRef, useRef, useImperativeHandle } from 'react'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import fragment from './fragment.glsl'
import vertex from './vertex.glsl'

const RoomShaderMaterial = shaderMaterial(
  {
    uBakedDayTexture: null,
    uBakedNightTexture: null,
    uBakedNeutralTexture: null,
    uLightMapTexture: null,

    uNightMix: 0,
    uNeutralMix: 0,

    uLightTvColor: null,
    uLightTvStrength: 0,

    uLightDeskColor: null,
    uLightDeskStrength: 0,

    uLightPcColor: null,
    uLightPcStrength: 0,
  },
  vertex,
  fragment,
)
extend({ RoomShaderMaterial })

const RoomShader = forwardRef((props, ref) => {
  const localRef = useRef<THREE.ShaderMaterial>(null)

  useImperativeHandle(ref, () => localRef.current)
  return <roomShaderMaterial ref={localRef} {...props} attach='material' transparent />
})

export { RoomShaderMaterial }
export default RoomShader
