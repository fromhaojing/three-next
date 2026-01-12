'use client'
import { useEffect, useRef, useMemo } from 'react'
import { useControls, folder } from 'leva'
import * as THREE from 'three'
import FullscreenQuasShader from './shader'
import { colorsDefault } from '@/utils/constant'
import { useMode } from '@/store/useMode'
import { ColorMapThree } from '@/utils/typing'

const FullscreenQuad = () => {
  const { isDebug } = useMode()
  const ref = useRef<THREE.ShaderMaterial>(null)

  const { bottomLeft, bottomRight, topLeft, topRight } = useControls({
    Background: folder({
      bottomLeft: '#f5aa58',
      bottomRight: '#fccf92',
      topLeft: '#f5883c',
      topRight: '#ff9043',
    }),
  })

  const colorsMap: ColorMapThree = useMemo(() => {
    const source = isDebug ? { bottomLeft, bottomRight, topLeft, topRight } : colorsDefault

    const converted: ColorMapThree = {} as ColorMapThree
    for (const key in source) {
      const color = new THREE.Color(source[key])
      converted[key] = color
    }

    return converted
  }, [isDebug, bottomLeft, bottomRight, topLeft, topRight])

  const handleCreateTexture = () => {
    for (const key in colorsMap) {
      colorsMap[key].convertLinearToSRGB()
    }
    const { bottomLeft, bottomRight, topLeft, topRight } = colorsMap
    const data = new Uint8Array([
      Math.round(bottomLeft.r * 255),
      Math.round(bottomLeft.g * 255),
      Math.round(bottomLeft.b * 255),
      255,
      Math.round(bottomRight.r * 255),
      Math.round(bottomRight.g * 255),
      Math.round(bottomRight.b * 255),
      255,
      Math.round(topLeft.r * 255),
      Math.round(topLeft.g * 255),
      Math.round(topLeft.b * 255),
      255,
      Math.round(topRight.r * 255),
      Math.round(topRight.g * 255),
      Math.round(topRight.b * 255),
      255,
    ])
    const dataTexture = new THREE.DataTexture(data, 2, 2)
    dataTexture.magFilter = THREE.LinearFilter
    dataTexture.needsUpdate = true
    if (ref.current) {
      ref.current.uniforms.uBackground.value = dataTexture
    }
  }
  useEffect(() => {
    handleCreateTexture()
  }, [colorsMap])

  return (
    <>
      <mesh frustumCulled={false} matrixAutoUpdate={false}>
        <planeGeometry args={[2, 2]} />
        <FullscreenQuasShader ref={ref} />
      </mesh>
    </>
  )
}

export default FullscreenQuad
