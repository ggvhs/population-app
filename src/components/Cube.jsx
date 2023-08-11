import React, { useRef,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
  //  useFrame(() =>{
  //    console.log('frames')
  //  })

 

  return (
    <Canvas style={{ background: 'black'}}>
        <mesh>
            <boxGeometry args={[1,1,1]} />
            <meshBasicMaterial color="orange"/>
        </mesh>
    </Canvas>
  )
}

export default Cube