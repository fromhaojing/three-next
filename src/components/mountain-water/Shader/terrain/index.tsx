import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useControls, folder } from 'leva'
import fragment from './fragment.glsl'
import vertex from './vertex.glsl'
import { useMemo } from 'react'

interface IProps {
  attach: 'material' | 'customDepthMaterial'
}

const useTerrainUniforms = () => {
  const controls = useControls({
    Shader: folder({
      uPositionFrequency: { value: 0.2, min: 0, max: 1, step: 0.001 },
      uStrength: { value: 2.0, min: 0, max: 10, step: 0.001 },
      uWarpFrequency: { value: 5.0, min: 0, max: 10, step: 0.001 },
      uWarpStrength: { value: 0.5, min: 0, max: 1, step: 0.001 },
    }),
  })

  const uniforms = useMemo(
    () => ({
      uPositionFrequency: { value: controls.uPositionFrequency },
      uStrength: { value: controls.uStrength },
      uWarpFrequency: { value: controls.uWarpFrequency },
      uWarpStrength: { value: controls.uWarpStrength },
      uTime: { value: 0 },
    }),
    [controls.uPositionFrequency, controls.uStrength, controls.uWarpFrequency, controls.uWarpStrength],
  )

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime()
  })

  return uniforms
}

const createMaterial = (baseMaterial: typeof THREE.Material, uniforms: any, extraProps = {}) =>
  new CustomShaderMaterial({
    baseMaterial,
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms,
    ...extraProps,
  })

export const TerrainShader: React.FC<IProps> = ({ attach }) => {
  const uniforms = useTerrainUniforms()

  const material = useMemo(
    () =>
      createMaterial(THREE.MeshStandardMaterial, uniforms, {
        color: '#85d534',
        metalness: 0,
        roughness: 0.5,
      }),
    [uniforms],
  )

  return <primitive object={material} attach={attach} />
}

export const DepthMaterial: React.FC<IProps> = ({ attach }) => {
  const uniforms = useTerrainUniforms()

  const material = useMemo(
    () =>
      createMaterial(THREE.MeshDepthMaterial, uniforms, {
        depthPacking: THREE.RGBADepthPacking,
      }),
    [uniforms],
  )

  return <primitive object={material} attach={attach} />
}
