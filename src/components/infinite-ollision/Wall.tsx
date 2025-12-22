import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Vec3 } from './type'

type WallProps = {
  rowCounts: number[]
  position?: Vec3
  rotation?: Vec3
}

const Wall = ({ rowCounts = [], position = [0, 0, 0], rotation = [0, 0, 0] }: WallProps) => {
  const brickWidth = 1
  const brickHeight = 0.5
  const gap = 0.05

  const brickBase = useGLTF('/models/brick/base.glb')
  const matcapWhiteTexture = useTexture('/models/matcaps/white.png')
  const { nodes } = brickBase
  const mesh = Object.values(nodes)[1] as any

  const totalBricks = rowCounts.reduce((sum, count) => sum + count, 0)
  const instRef = useRef<THREE.InstancedMesh>(null)

  const matrices = useMemo(() => {
    const mats: THREE.Matrix4[] = []
    for (let y = 0; y < rowCounts.length; y++) {
      const count = rowCounts[y]
      const unitWidth = brickWidth + gap
      const rowWidth = count * unitWidth - gap
      const offsetX = -rowWidth / 2

      for (let x = 0; x < count; x++) {
        const matrix = new THREE.Matrix4()
        matrix.makeRotationZ(Math.PI / 2)
        matrix.multiply(new THREE.Matrix4().makeRotationY(Math.PI / 2))
        matrix.multiply(new THREE.Matrix4().makeRotationZ((Math.random() / 10) * 2))
        matrix.setPosition(new THREE.Vector3(x * unitWidth + offsetX, y * brickHeight, y * 0.001))

        mats.push(matrix)
      }
    }
    return mats
  }, [rowCounts])

  useEffect(() => {
    if (!instRef.current) return
    matrices.forEach((matrix, i) => {
      instRef.current!.setMatrixAt(i, matrix)
    })
    instRef.current.instanceMatrix.needsUpdate = true
  }, [matrices])

  return (
    <group position={position} rotation={rotation}>
      <instancedMesh ref={instRef} args={[mesh.geometry, undefined, totalBricks]}>
        <meshMatcapMaterial matcap={matcapWhiteTexture} toneMapped={false} />
      </instancedMesh>
    </group>
  )
}

export default Wall
