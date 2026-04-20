import { Float, Html, PivotControls } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';

function Scene() {
    const cube = useRef();
    const torus = useRef();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <ambientLight intensity={3} />
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh
                    ref={cube}
                    position={isMobile ? [0.8, 1.8, 0] : [2.5, 1.4, 0]}
                    scale={isMobile ? [0.7, 0.7, 0.7] : [0.9, 0.9, 0.9]}>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
                <mesh
                    ref={torus}
                    position={isMobile ? [0, -0.5, 0] : [0, -1, 0]}
                    scale={isMobile ? [0.5, 0.5, 0.5] : [0.7, 0.7, 0.7]}>
                    <torusGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Float>
            {!isMobile && (
                <PivotControls
                    anchor={[0, 0, 0]}
                    depthTest={false}
                    lineWidth={4}
                    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
                    scale={110}
                    fixed={true}
                >
                    <mesh
                        ref={torus}
                        position={isMobile ? [-1, 1, 1] : [-2, 1.2, 1]}
                        scale={isMobile ? [0.2, 0.2, 0.2] : [0.4, 0.4, 0.4]}
                        rotation={[0.75, 0.6, 0]} >
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
            )}
        </>
    )
}

export default function Experience() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            dpr={[1, 2]} // prevents over-rendering
        >
            <Scene />
        </Canvas>
    )
}