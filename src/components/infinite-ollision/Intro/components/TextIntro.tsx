import { RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { Vec3 } from '../../type'
import { useMemo } from 'react'

const TextIntro = () => {
  const modelNames: { key: string; position: Vec3 }[] = [
    { key: 'b', position: [0, 0, 0] },
    { key: 'r', position: [0, 0, 0] },
    { key: 'u', position: [0, 0, 0] },
    { key: 'n', position: [0, 0, 0] },
    { key: 'o', position: [0, 0, 0] },
    { key: 's', position: [0, 0, 0] },
    { key: 'i', position: [0, 0, 0] },
    { key: 'm', position: [0, 0, 0] },
    { key: 'o', position: [4, 0, 0] },
    { key: 'n', position: [6, 0, 0] },
    { key: 'creative', position: [0, 0, 0] },
    { key: 'dev', position: [0, 0, 0] },
  ]

  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  matcapWhiteTexture.colorSpace = THREE.SRGBColorSpace

  const material = useMemo(() => new THREE.MeshMatcapMaterial({ matcap: matcapWhiteTexture }), [])

  const models: any[] = modelNames.map((name) => useGLTF(`/models/intro/${name.key}/base.glb`))

  return (
    <group rotation-x={-Math.PI / 2}>
      {modelNames.map((name, index) => {
        const scene = models[index].scene.clone()
        const box = new THREE.Box3().setFromObject(scene)
        const center = new THREE.Vector3()
        const size = new THREE.Vector3()
        box.getSize(size)
        box.getCenter(center)

        {
          scene.traverse((child) => {
            if (child.isMesh) {
              child.material = material
            }
          })
        }
        return (
          <RigidBody key={scene.uuid} position={name.position} colliders={false}>
            <CuboidCollider
              args={[size.x / 2, size.y / 2, size.z / 2]}
              position={[name.position[0] + center.x, name.position[1] + center.y, name.position[2] + center.z]}
            />
            <primitive object={scene} />
          </RigidBody>
        )
      })}
    </group>
  )
}

export default TextIntro
