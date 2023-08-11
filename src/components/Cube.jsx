import React, { useRef,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const [ topHalfScale, setTopHalfScale] = useState(2.0)

 

  return (
    <Canvas style={{ background: 'black'}}>
        <ambientLight />
        <pointLight position={[10,10,10]} />
        <mesh>
            <boxGeometry args={[1,1,1]} />
            <meshBasicMaterial color="orange"/>
            <mesh scale-y={topHalfScale} position-y = {topHalfScale / 2}/>
        </mesh>
    </Canvas>
  )
}

export default Cube