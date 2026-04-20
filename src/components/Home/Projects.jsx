import Project from './Project.jsx';
import flossBossImage from '../../assets/floss-boss.png';
import msgRedesignImage from '../../assets/msg-redesign.jpg';
import yearbookImage from '../../assets/yearbook.png';
import cognitiveBiasImage from '../../assets/cognitive-bias.png';
import alumniPagesImage from '../../assets/alumni-pages.png';

const projects = [
  {
    title: "Floss Boss",
    description: "An alternative interface interactive experience presented to 20,000+ attendees at the GDC Festival of Gaming as an alt.ctrl.GDC competition finalist.",
    image: flossBossImage,
    link: "/floss-boss",
    tags: ["JavaScript", "Node.js", "HTML", "CSS", "C++", "Arduino", "Rive", "Web Development", "Game Development"]
  },
  {
    title: "MSG.com Redesign",
    description: "A redesign of Madison Square Garden's venue homepage I did during my internship.",
    image: msgRedesignImage,
    link: "/msg-redesign",
    tags: ["Figma", "Product Design", "User Research", "Competitive Analysis", "A/B Testing", "UserTesting"]
  },
  {
    title: "CSH Yearbook",
    description: "A multi-year creative passion project I led for RIT's Computer Science House.",
    image: yearbookImage,
    link: "/yearbook",
    tags: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Blender", "Notion", "Trello", "Product Design", "Product Management", "Graphic Design"]
  },
  {
    title: "Cognitive Bias & Generative AI Lab",
    description: "An educational lab about human cognitive biases and trust in generative AI outputs.",
    image: cognitiveBiasImage,
    link: "/cognitive-bias",
    tags: ["Figma", "Design Systems", "Product Design"]
  }
  // {
  //   title: "Knicks & Rangers Alumni Pages",
  //   description: "Webpage designs for retired New York Knicks and New York Rangers players.",
  //   image: alumniPagesImage,
  //   link: "/alumni-pages",
  //   tags: ["Figma", "Ceros"]
  // },
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
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <section className="projects-grid">
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
      </section>
    </>
  )
}