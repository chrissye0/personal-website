import Footer from '../components/Footer.jsx';
import Intro from '../components/About/Intro.jsx';
import Skills from '../components/About/Skills.jsx';
import Experience from '../components/About/Experience.jsx';
import "../styles/About.css";

export default function About() {
  return (
    <section className="page">
      <section className="about">
        <Intro />
        <Skills />
        <Experience />
      </section>
      <Footer />
    </section>
  )
}