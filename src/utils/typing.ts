import * as THREE from 'three'

export type ColorKeys = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'
export type ColorMapString = Record<ColorKeys, string>
export type ColorMapThree = Record<ColorKeys, THREE.Color>
