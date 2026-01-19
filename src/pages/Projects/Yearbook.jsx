import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

export default function Yearbook() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Background", "Process", "Research", "Ideation, Design, & Feedback", "Results"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>CSH Yearbook</h1>
            <p>A multi-year creative team project I led for RIT's Computer Science House.</p>
            <section className="project-page-tags">
              <button className="project-skill">Product Management</button>
              <button className="project-skill">Adobe Illustrator</button>
              <button className="project-skill">Adobe Photoshop</button>
              <button className="project-skill">Canva</button>
              <button className="project-skill">Blender</button>
              <button className="project-skill">Notion</button>
              <button className="project-skill">Trello</button>
            </section>
          </header>
          <article className="yearbook-intro" id="Background">
            <h2>Background</h2>
            <p>This project began in the Fall Semester of my freshman year, and I have led it ever since. I was heavily involved in the student organization Computer Science House and I soon learned of a yearbook project that died down as a result of COVID. This club meant a lot to me throughout my college experience, and with my prior design experience, I thought this project was a perfect way to give back to the community that gave so much to me.
              It began with a team of only two people, yet we were able to garner interest and create a small team. Though freshmen composed most of the team, we were determined to do the research and create a yearbook symbolic of the whole CSH community. The yearbooks feature photos of all CSH members, funny quotes, technical projects, CSH-branded designs, and photos from events throughout the year.
            </p>
          </article>
          <article className="yearbook-process" id="Process">
            <h2>Process</h2>
            
          </article>
          <article className="yearbook-research" id="Research">
            <h2>Research</h2>
            <p>Before beginning the design process, we conducted research on previous CSH yearbooks and feedback from members. In 2022-2023, we referenced projects pre-COVID, yet in the projects after, we could directly utilize the feedback we received from the year before. Additionally, we reviewed select RIT yearbooks from the RIT Archive, which contained student-produced yearbooks from 1912 to 1983. We drew inspiration for club branding, imagery, different layouts, design consistency, and more.</p>
          </article>
          <article className="yearbook-design" id="Ideation, Design, & Feedback">
            <h2>Ideation, Design, & Feedback</h2>
            <p>As the director, I held weekly meetings and check-ins to track progress, feedback, and our timeline. We stored information in a Trello board and a series of Google Sheets and recorded notes through Notion. I assigned people roles and responsibilities for sections and provided adequate design guidelines and templates to ensure team members felt well-prepared. A key point I wanted to address was that anyone, regardless of their experience with design, could contribute, so we used Canva as it was both free and easy to learn.</p>
            <p>I designed the general page template as well as the cover, and I was also responsible for managing logistics and ensuring we had the correct information for each member. We iterated through different page designs and layouts based on feedback both from the team and the rest of CSH, which also led to yearly design themes and sections specific to the year. Depending on the yearbook's theme, we used several additional design tools. We created vector-based designs with Adobe Illustrator and Figma in 2023-2024 and 3D vaporwave designs with Blender in 2024-2025. I oversaw the process and gave members feedback on pages to maintain visual coherence and consistency. I used Adobe Photoshop for photo editing as well.</p>
          </article>
          <article className="yearbook-results" id="Results">
            <h2>Results</h2>
            <p>With the 2022-2023, 2023-2024, and 2024-2025 yearbooks, we produced and sold 150+ yearbooks to CSH members and alumni. The yearbooks were met with positive reception and now serve as a memorable keepsake for CSH members to look back on their time in the community.</p>
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
}