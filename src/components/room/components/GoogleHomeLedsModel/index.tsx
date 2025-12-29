'use client'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const colors = ['#196aff', '#ff0000', '#ff5d00', '#7db81b']

const GoogleHomeLedsModel = () => {
  const modelRef = useRef<any>(null)
  const model = useGLTF('/room/models/googleHomeLedsModel.glb')
  const googleHomeLedMaskTexture = useTexture('/room/textures/googleHomeLedMask.png')

  useFrame((state) => {
    const clock = state.clock.getElapsedTime()
    for (const [i, mesh] of modelRef.current.children.entries()) {
      mesh.material.opacity = Math.sin(clock * 0.002 - i * 0.5) * 0.5 + 0.5
    }
  })

  useEffect(() => {
    if (!model.scene) return

    model.scene.traverse((child: any) => {
      if (child.isMesh) {
        const i = Number(child.name.slice(-1))
        child.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color('red'),
          alphaMap: googleHomeLedMaskTexture,
          transparent: true,
        })
      }
    })
  }, [])

  return (
    <>
      <primitive ref={modelRef} object={model.scene} />
    </>
  )
}

export default GoogleHomeLedsModel
