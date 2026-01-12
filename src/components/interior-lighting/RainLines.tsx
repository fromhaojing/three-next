import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type RainProps = {
  count?: number
  area?: number
  speed?: number
}

const RainLines = ({ count = 8000, area = 50, speed = 20 }: RainProps) => {

  return (
    <points >
    
    </points>
  )
}

export default RainLines
