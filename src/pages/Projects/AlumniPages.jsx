import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

export default function AlumniPages() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Introduction"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>Knicks & Rangers Alumni Pages</h1>
            <p>Webpage designs for retired New York Knicks and New York Rangers players.</p>
            <section className="project-page-tags">
              <button className="project-skill">Figma</button>
              <button className="project-skill">Ceros</button>
            </section>
          </header>
          <article className="alumni-intro" id="Introduction">
            <h2>Introduction</h2>
            <p>Another project I worked on while at Madison Square Garden was designing a series of web pages for New York Knicks and New York Rangers alumni. Page designs were to be built in Figma and then transferred to the platform Ceros for interactivity and publishing. I worked with others in the Digital Experience Team and the Knicks and Rangers Marketing teams throughout the process. I was given names, player numbers, statistics, and a biography, and it was up to me to determine how I wanted to display this information. I was given a long list of players, so I planned to create a base template with information I could easily change as I made it down the list. I also had to consult with the brand guidelines for both the Knicks and Rangers and differences in branding led to differences in the design process as I worked on both projects.</p>
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
}