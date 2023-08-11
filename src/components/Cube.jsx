import React, { useRef,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'

const Cube = () => {


 

  return (
    <Canvas style={{ background: 'black'}}>
        <mesh>
            <boxGeometry  />
            <meshBasicMaterial color="orange"/>
        </mesh>
    </Canvas>
  )
}

export default Cube