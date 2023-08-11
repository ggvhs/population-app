import React from 'react'
import { Canvas } from '@react-three/fiber'

function Cube() {
  return (
    
    <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange"/>
    </mesh>
  )
}

export default Cube