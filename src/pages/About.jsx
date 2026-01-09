import Footer from '../components/Footer.jsx';
import '../styles/App.css';

export default function About() {
  return (
    <section className="page">
      <section className="about">
        <h1>About Page</h1>
        <p>My name is Chrissy!</p>
        <p>I am a student at the Rochester Institute of Technology studying New Media Interactive Development with a minor in Web Development. I will be graduating in May 2026.</p>
        <p>I am passionate about UI/UX design, user research, digital art, web development, and interactive technologies.</p>
        <p>I dream of one day making the digital media that ignited my passions for art and tech in the first place, but until then, it's a work in progress!</p>
      </section>
      <Footer />
    </section>
  )
}