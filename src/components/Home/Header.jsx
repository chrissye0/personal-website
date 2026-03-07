import Three from './Three.jsx';
import Typewriter from './Typewriter.jsx';

export default function Header() {
  return (
    <section className="header">
      <Three />
      <Typewriter />
      <section className="view-projects">
        <h3>View Projects</h3>
        <p>↓</p>
      </section>
    </section>
  )
}