import { RigidBody } from '@react-three/rapier'
import { Intro } from '.'

const Floor = () => {
  return (
    <>
      <RigidBody type='fixed' position={[0, -0.1, 0]} >
        <mesh visible={false}>
          <planeGeometry args={[500, 500]} />
        </mesh>
        <Intro />
      </RigidBody>
    </>
  )
}

export default Floor
