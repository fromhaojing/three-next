import { RigidBody, CuboidCollider } from '@react-three/rapier'

const Floor = () => {
  return (
    <>
      <RigidBody type='fixed' position={[0, -0.01, 0]}>
        <CuboidCollider args={[250, 0.05, 250]} />
      </RigidBody>
    </>
  )
}

export default Floor
