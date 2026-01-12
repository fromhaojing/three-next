import CustomShaderMaterial from 'three-custom-shader-material'
import * as THREE from 'three'
import fragment from './fragment.glsl'
import vertex from './vertex.glsl'

const TerrainShader = () => {
  return (
    <CustomShaderMaterial<typeof THREE.MeshStandardMaterial>
      baseMaterial={THREE.MeshStandardMaterial}
      color='#85d534'
      metalness={0}
      roughness={0.5}
      vertexShader={vertex}
      fragmentShader={fragment}
    />
  )
}

export default TerrainShader
