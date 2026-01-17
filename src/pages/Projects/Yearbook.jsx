import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

export default function Yearbook() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Introduction", "Process", "Results"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>CSH Yearbook</h1>
            <p>A year-long project where I led a small team to create a yearbook for RIT's Computer Science House.</p>
            <section className="project-page-tags">
              <button className="project-skill">Product Management</button>
              <button className="project-skill">Adobe Illustrator</button>
              <button className="project-skill">Adobe Photoshop</button>
              <button className="project-skill">Canva</button>
            </section>
          </header>
          <article className="yearbook-intro" id="Introduction">
            <h2>Introduction</h2>
            <p>This project began in the Fall Semester of my freshman year and I have led it ever since. It began with a team of only two people, yet as time passed, we were able to garner interest and create a small team. As a result of COVID, the 2022-2023 yearbook was the first yearbook Computer Science House has seen in 3 years. Even though most of the team was composed of freshmen, we were determined to make a yearbook that CSH deserved. The yearbooks feature photos of all CSH members, funny quotes, technical projects, CSH-branded designs, and photos from events throughout the entire year. We hope to continue making yearbooks for the foreseeable future!</p>
          </article>
          <article className="yearbook-process" id="Process">
            <h2>Process</h2>
            <p>As the yearbook lead, I held weekly meetings and check-ins to keep track of progress, feedback, and where we were on our timeline. All information was stored in a Trello Board and a series of Google Sheets. I assigned people roles and responsibilities for certain sections, and I made sure I provided adequate design guidelines and templates to ensure people felt prepared. (A big point I wanted to address was that anyone, regardless of their experience with design, could help out.) I designed the general page template as well as the cover, and I was also responsible for managing logistics and making sure we had the correct information for each individual member. I also designed and completed multiple sections. I maintained close connections with the yearbook producer and distributor to make sure we stayed on track.</p>
          </article>
          <article className="yearbook-results" id="Results">
            <h2>Results</h2>
            <p>With the 2022-2023 and 2023-2024 yearbooks, we ended up producing and selling 100+ yearbooks to CSH members and alumni. The yearbook was met with positive reception and now serves as a memorable keepsake for CSH members to look back on their time in the community.</p>
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
}