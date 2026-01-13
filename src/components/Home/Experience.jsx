import { Text, Float } from '@react-three/drei';
import { useRef } from 'react';


export default function Experience() {
    const cube = useRef();
    return (
        <>
            <ambientLight intensity={3} />
            <Float speed={3} rotationIntensity={3} floatIntensity={3}>
            <mesh ref={cube}>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
            </Float>
            <Text
                position={[0, 0, 1.25]}
                fontSize={1}
                color="black"
            >
                Hi, my name is Chrissy!
            </Text>
        </>
    )
}