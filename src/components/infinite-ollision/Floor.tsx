import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { MeshBasicMaterial } from 'three'
const Floor = () => {
  return (
    <>
      <RigidBody type='fixed' position={[0, -0.1, 0]} rotation-x={-Math.PI / 2}>
        <mesh visible={false}>
          <planeGeometry args={[500, 500]} />
        </mesh>
      </RigidBody>
    </>
  )
}

export default Floor
