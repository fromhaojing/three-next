import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'

const TextIntro = () => {
  const modelNames = [
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

  const material = new THREE.MeshMatcapMaterial({ matcap: matcapWhiteTexture })

  const models: any[] = modelNames.map((name) => useGLTF(`/models/intro/${name.key}/base.glb`))

  return (
    <group >
      {modelNames.map((name, index) => {
        const scene = models[index].scene.clone()

        return (
          <RigidBody key={scene.uuid}>
            <primitive object={scene} position={name.position}>
              {scene.traverse((child) => {
                if (child.isMesh) {
                  child.material = material
                }
              })}
            </primitive>
          </RigidBody>
        )
      })}
    </group>
  )
}

export default TextIntro
