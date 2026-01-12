import Footer from "../../components/Footer.jsx";
export default function FlossBoss() {
  return (
    <>
      <section className="project-page">
        {/** create some mockups in Figma */}
        <header className="project-header">
          <h1>Floss Boss</h1>
          <p>An alternative interface interactive experience.</p>
          <section className="project-tags">
            <button className="project-skill">Web Development</button>
            <button className="project-skill">Arduino</button>
            <button className="project-skill">Rive</button>
            <button className="project-skill">Game Development</button>
            <button className="project-skill">Product Management</button>
          </section>
        </header>
      </section>
      <Footer />
    </>
  );
}