'use client'
import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'

const colors = ['#196aff', '#ff0000', '#ff5d00', '#7db81b']

const LoupedeckButtonsModel = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/room/models/loupedeckButtonsModel.glb')

  useEffect(() => {
    if (!groupRef.current) return

    const meshes: THREE.Mesh[] = []

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0,
        })
        meshes.push(child)
      }
    })

    const play = () => {
      const inButtons: THREE.Mesh[] = []
      const outButtons: THREE.Mesh[] = []

      for (const mesh of meshes) {
        Math.random() < 0.5 ? inButtons.push(mesh) : outButtons.push(mesh)
      }
      outButtons.forEach((m: any) => (m.material.opacity = 0))
      inButtons.forEach((mesh: any, i) => {
        mesh.material.color.set(colors[Math.floor(Math.random() * colors.length)])
        gsap.fromTo(
          mesh.material,
          { opacity: 0 },
          {
            opacity: 1,
            delay: i * 0.05,
            duration: 0.2,
            onComplete: () => {
              gsap.to(mesh.material, {
                opacity: 0,
                delay: 3,
                duration: 0.5,
              })
            },
          },
        )
      })
    }

    play()
    const id = window.setInterval(play, 5000)

    return () => {
      window.clearInterval(id)
      gsap.killTweensOf(meshes.map((m) => m.material))
    }
  }, [])

  return <primitive ref={groupRef} object={scene} />
}

export default LoupedeckButtonsModel
