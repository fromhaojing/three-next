'use client'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { RoomShaderMaterial } from '../../Shader'

const colors = {
  tv: '#ff115e',
  desk: '#ff6700',
  pc: '#0082ff',
}
const TopChairModel = () => {
  const modelRef = useRef<any>(null)
  const model = useGLTF('/room/models/topChairModel.glb')
  const group = model.scene.children[0]
  const bakedDayTexture = useTexture('/room/textures/bakedDay.jpg')
  bakedDayTexture.colorSpace = THREE.SRGBColorSpace
  bakedDayTexture.flipY = false
  const bakedNeutralTexture = useTexture('/room/textures/bakedNeutral.jpg')
  bakedNeutralTexture.colorSpace = THREE.SRGBColorSpace
  bakedNeutralTexture.flipY = false
  const bakedNightTexture = useTexture('/room/textures/bakedNight.jpg')
  bakedNightTexture.colorSpace = THREE.SRGBColorSpace
  bakedNightTexture.flipY = false
  const lightMapTexture = useTexture('/room/textures/lightMap.jpg')
  lightMapTexture.flipY = false

  useFrame((state) => {
    const clock = state.clock.getElapsedTime()
    modelRef.current.rotation.y = Math.sin(clock) * 0.5
  })
  useEffect(() => {
    if (!model.scene) return
    const material = new RoomShaderMaterial()
    material.uniforms.uBakedDayTexture.value = bakedDayTexture
    material.uniforms.uBakedNeutralTexture.value = bakedNeutralTexture
    material.uniforms.uBakedNightTexture.value = bakedNightTexture
    material.uniforms.uLightMapTexture.value = lightMapTexture
    material.uniforms.uNightMix.value = 0
    material.uniforms.uNeutralMix.value = 0
    material.uniforms.uLightTvColor.value = new THREE.Color(colors.tv)
    material.uniforms.uLightTvStrength.value = 1.47
    material.uniforms.uLightDeskColor.value = new THREE.Color(colors.desk)
    material.uniforms.uLightDeskStrength.value = 1.9
    material.uniforms.uLightPcColor.value = new THREE.Color(colors.pc)
    material.uniforms.uLightPcStrength.value = 1.4

   group.traverse((child: any) => {
      if (child.isMesh) {
        child.material = material
      }
    })
  }, [])

  return (
    <>
      <primitive ref={modelRef} object={group} />
    </>
  )
}

export default TopChairModel
