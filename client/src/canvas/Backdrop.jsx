import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
    const shadows = useRef()
    return (
        <AccumulativeShadows
        position={[0, 0, -0.14]}
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}//transparency of the shadows
        scale={10}
        rotation={[Math.PI / 2, 0, 0]}
        >
            <RandomizedLight 
            amount={4}
            radius={5}
            intensity={0.55}
            ambient={0.25}
            position={[5, 5, -10]}
            />
            <RandomizedLight 
            amount={4}
            radius={5}
            intensity={0.55}
            ambient={0.55}
            position={[-5, 10, -10]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop