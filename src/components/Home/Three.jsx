import { Text, Float, Html, PivotControls } from '@react-three/drei';
import { useRef } from 'react';


export default function Experience() {
    const cube = useRef();
    const torus = useRef();
    return (
        <>
            <ambientLight intensity={3} />
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh ref={cube} position={[2.5, 1.4, 0]} scale={[0.75, 0.75, 0.75]}>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
                <mesh ref={torus} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
                    <torusGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Float>
            <PivotControls
                anchor={[0, 0, 0]}
                depthTest={false}
                lineWidth={3}
                axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
                scale={70}
                fixed={true}
            >
                <mesh ref={torus} position={[-2, 1.4, 1]} scale={[0.35, 0.35, 0.35]} rotation={[0.75, 0.6, 0]} >
                    <torusGeometry />
                    <meshStandardMaterial color="orange" />
                    <Html
                        position={[1.3, 1, 0]}
                        wrapperClass="torus-label"
                        center
                        distanceFactor={6}
                        occlude={[torus, cube]}
                    >interact with me!</Html>
                </mesh>

            </PivotControls>
            <Text
                font="../../fonts/InstrumentSerif/InstrumentSerif-Italic.ttf"
                position={[0, 0.4, 2]}
                fontSize={0.5}
                color="black"
            >
                Hi, my name is Chrissy
            </Text>
        </>
    )
}