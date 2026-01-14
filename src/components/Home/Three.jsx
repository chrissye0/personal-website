import { Text, Float } from '@react-three/drei';
import { useRef } from 'react';


export default function Experience() {
    const cube = useRef();
    return (
        <>
            <ambientLight intensity={3} />
            <Float speed={3} rotationIntensity={3} floatIntensity={3}>
                <mesh ref={cube} position={[-2.5, -0.75, 0]} scale={[0.75, 0.75, 0.75]}>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
                <mesh ref={cube} position={[3, 1, 0]} scale={[0.75, 0.75, 0.75]}>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Float>
            <Text
                font="../../fonts/InstrumentSerif/InstrumentSerif-Italic.ttf"
                position={[0, 0.4, 2]}
                fontSize={0.5}
                color="black"
            >
                Hi, my name is Chrissy!
            </Text>
        </>
    )
}