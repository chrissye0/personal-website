import Header from '../components/Home/Header.jsx';
import Projects from '../components/Home/Projects.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/App.css';
import "../styles/Home.css";
import "../styles/Project.css";
import "../styles/About.css";

export default function Home() {
  return (
    <section className="home">
      <Header />
      <section className="lower-content">
        <Projects />
        <Footer />
      </section>
    </section>
  )
}