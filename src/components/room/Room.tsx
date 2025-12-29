'use client'

import { RoomModel, GoogleHomeLedsModel, LoupedeckButtonsModel, TopChairModel } from './components'

const Room = () => {
  return (
    <>
      <color args={['#010101']} attach='background' />
      {/* <ambientLight intensity={1} /> */}
      {/* <directionalLight position={[5, 10, 5]} intensity={1} /> */}
      <RoomModel />
      <GoogleHomeLedsModel />
      <LoupedeckButtonsModel />
      <TopChairModel />
    </>
  )
}

export default Room
