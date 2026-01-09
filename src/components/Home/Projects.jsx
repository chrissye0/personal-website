import Project from './Project.jsx';

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <section className="projects">
        <Project title="Floss Boss" description="An alternative interface interactive experience." link="/floss-boss" />
        <Project title="MSG.com Redesign" description="A redesign of Madison Square Garden's homepage I did during my internship." link="/msg-redesign" />
        <Project title="Yearbook" description="A year-long project where I led a small team to create a yearbook for RIT's Computer Science House." link="/yearbook" />
        <Project title="Portfolio Website" description="How I made this website!" link="/portfolio" />
        <Project title="Knicks & Rangers Alumni Pages" description="Webpage designs for retired New York Knicks and New York Rangers players." link="/alumni-pages" />
      </section>
    </>
  )
}