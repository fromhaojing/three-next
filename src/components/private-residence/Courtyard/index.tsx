import { useGLTF, useTexture } from '@react-three/drei'
import { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'

const count = 10000
const area = 200

const Courtyard = () => {
  // const grass_low = useGLTF('/private-residence/models/grass_low.glb')

  const gravel = useTexture('/private-residence/textures/gravel.jpg')
  gravel.wrapS = THREE.RepeatWrapping
  gravel.wrapT = THREE.RepeatWrapping
  gravel.repeat.set(10, 10)
  gravel.colorSpace = THREE.SRGBColorSpace
  const beige_wall = useTexture('/private-residence/textures/beige_wall.jpg')
  beige_wall.colorSpace = THREE.SRGBColorSpace

  // const instRef = useRef<THREE.InstancedMesh>(null)

  // const mesh = useMemo(() => Object.values(grass_low.nodes).find((n: any) => n.type === 'Mesh') as THREE.Mesh, [])

  // const matrices = useMemo(() => {
  //   const mats: THREE.Matrix4[] = []
  //   const dummy = new THREE.Object3D()
  //   for (let i = 0; i < count; i++) {
  //     dummy.position.set((Math.random() - 0.5) * area, 0, (Math.random() - 0.5) * area)
  //     dummy.rotation.y = Math.random() * Math.PI * 2
  //     const scale = 20 * (0.8 + Math.random() * 0.4)
  //     dummy.scale.set(scale, scale, scale)
  //     dummy.updateMatrix()
  //     mats.push(dummy.matrix.clone())
  //   }
  //   return mats
  // }, [count])

  // useEffect(() => {
  //   if (!instRef.current) return
  //   matrices.forEach((matrix, i) => {
  //     instRef.current!.setMatrixAt(i, matrix)
  //   })
  //   instRef.current.instanceMatrix.needsUpdate = true
  // }, [matrices])

  return (
    <>
      {/* <instancedMesh ref={instRef} args={[mesh.geometry, mesh.material, count]} /> */}
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[500, 500]} />
        <meshBasicMaterial map={gravel} />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position={[-60, 22, 15]} rotation-y={0.05}>
        <boxGeometry args={[42, 42, 2]} />
        <meshBasicMaterial map={beige_wall} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[-40, 7.5, 30]}>
        <boxGeometry args={[3, 1, 25]} />
        <meshBasicMaterial map={beige_wall} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[-40, 7.5, 0]}>
        <boxGeometry args={[3, 1, 25]} />
        <meshBasicMaterial map={beige_wall} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[-80, 9, 0]}>
        <boxGeometry args={[3, 1, 30]} />
        <meshBasicMaterial map={beige_wall} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[-80, 9, 30]}>
        <boxGeometry args={[3, 1, 30]} />
        <meshBasicMaterial map={beige_wall} />
      </mesh>
    </>
  )
}

export default Courtyard
