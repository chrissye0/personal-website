import Project from './Project.jsx';
import flossBossImage from '../../assets/floss-boss.png';
import msgRedesignImage from '../../assets/msg-redesign.jpg';
import yearbookImage from '../../assets/yearbook.png';
import alumniPagesImage from '../../assets/alumni-pages.png';

const projects = [
  {
    title: "Floss Boss",
    description: "An alternative interface interactive experience.",
    image: flossBossImage,
    link: "/floss-boss",
    tags: ["Web Development", "Arduino", "Rive", "Game Development", "Product Management"]
  },
  {
    title: "MSG.com Redesign",
    description: "A redesign of Madison Square Garden's homepage I did during my internship.",
    image: msgRedesignImage,
    link: "/msg-redesign",
    tags: ["Figma", "User Research", "Competitive Analysis", "UserTesting"]
  },
  {
    title: "Yearbook",
    description: "A year-long project where I led a small team to create a yearbook for RIT's Computer Science House.",
    image: yearbookImage,
    link: "/yearbook",
    tags: ["Product Management", "Adobe Illustrator", "Adobe Photoshop", "Canva"]
  },
  {
    title: "Knicks & Rangers Alumni Pages",
    description: "Webpage designs for retired New York Knicks and New York Rangers players.",
    image: alumniPagesImage,
    link: "/alumni-pages",
    tags: ["Figma", "Ceros"]
  },
  // {
  //   title: "Portfolio Website",
  //   description: "How I made this website!",
  //   image: "/images/portfolio-website.jpg",
  //   link: "/portfolio",
  //   tags: ["React", "Three.js"]
  // },
];


export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <section className="projects">
        {projects.map((project) => (
          <Project
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </section>
    </>
  )
}