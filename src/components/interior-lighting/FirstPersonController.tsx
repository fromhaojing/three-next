import { useKeyboardControls } from '@react-three/drei'
import { useRapier, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useControls, folder } from 'leva'

const FirstPersonController = () => {
  const [, getKeys] = useKeyboardControls()

  // const { cameraPosition } = useControls({
  //   camera: folder({ position: [0, 0, 0] }),
  // })
  useFrame((state, delta) => {
    // state.camera.position = cameraPosition
    const { forward } = getKeys()
    if (forward) {
      state.camera.position.z -= 1
    }
  })

  return (
    <RigidBody type='fixed' position={[0, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} scale={100} />
        <meshBasicMaterial color='red' />
      </mesh>
    </RigidBody>
  )
}

export default FirstPersonController
