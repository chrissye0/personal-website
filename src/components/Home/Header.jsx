import { Canvas } from '@react-three/fiber'
import Three from './Three.jsx';
import Typewriter from './Typewriter.jsx';

export default function Header() {
  return (
    <section className="header">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6]
        }}
      >
        <Three />
      </Canvas>
      <Typewriter />
      <section className="view-projects">
        <h3>View Projects</h3>
        <p>↓</p>
      </section>
    </section>
  )
}