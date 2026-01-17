import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

export default function MsgRedesign() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Introduction", "Competitive Analysis", "Process", "Results"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>MSG.com Redesign</h1>
            <p>A redesign project of Madison Square Garden's venue landing page.</p>
            <section className="project-page-tags">
              <button className="project-skill">Figma</button>
              <button className="project-skill">User Research</button>
              <button className="project-skill">Competitive Analysis</button>
              <button className="project-skill">UserTesting</button>
            </section>
          </header>
          <article className="msg-intro" id="Introduction">
            <h2>Introduction</h2>
            <p>I worked on this redesign project throughout my Digital Product Design summer internship at Madison Square Garden. The project involved brainstorming sessions, Figma prototyping, and much user research.</p>
            <p>The project began with me reviewing previous venue landing page user tests and interactivity data measured by our Digital Experience data team. While reception was mostly positive, the tests indicated room for improvement and data indicated a low level of interactivity on the site. I began forming ideas for the redesign, and with insights from the team, I started conducting user research with the UserTesting tool.</p>
          </article>
          <article className="msg-competitive-analysis" id="Competitive Analysis">
            <h2>Competitive Analysis</h2>
            <p>My first batch of user tests was for a competitive analysis, in which I compared the MSG.com homepage with that of competitor venue homepages, more specifically Barclays Center, Climate Pledge Arena, T-Mobile Arena, and Crypto.com Arena. I had screening questions (such that the test targeted specifically venue ticket buyers) and had users rate the homepages based on their design, navigation, and ease of use. I also collected the Net Promoter Scores of each site and general user feedback. I evaluated the strengths and weaknesses of each venue and compared them to those of the MSG.com homepage and presented findings to the Digital Experience team as well as some from the Sports and Marketing teams. I then created my first few design mockups of the homepage, as seen below.</p>
            {/* images and designs here */}
          </article>
          <article className="msg-process" id="Process">
            <h2>Process</h2>
            <p>After some design feedback from my team, I settled on two mockup designs I was confident in. The differences between the two included the “Plan Your Visit” section and the event carousel at the top. In the first version, Plan Your Visit is at the bottom. The user can click through photos of the arena, and to the right, the user can read general venue information and navigate to their respective pages. The version on the right contains the icons and boxes from before and is instead higher up on the homepage. For the carousel, the bar at the bottom with the navigation arrows is different, with one being an extension of the arena background and the other having a dark blue background.</p>
            <p>At this point, I conducted an A/B test asking users to scroll through both prototypes individually, express their thoughts, note any differences between the two, and then see them both side-by-side. Results from the test showed people preferred “Plan Your Visit” being at the top, as they would have to scroll down past all the events in the other version. The icons also made the design more readable and accessible for users. There weren’t many strong opinions regarding the carousel, but some cited that the dark blue bar made the design less busy and more “modern.” I went forward with the 2nd mockup by replacing placeholders with imagery and event content and finally conducted another A/B test comparing this mockup and the current MSG.com website.</p>
            {/* images and designs here */}
          </article>
          <article className="msg-results" id="Results">
            <h2>Results</h2>
            <p>The results from the 2nd A/B test showed that most tested users preferred my prototype to the official website. They liked the use of icons and imagery and how more events were displayed and organized. People could more easily find an event they liked directly from the homepage and icons pointed toward a more user-friendly and accessible design. Users also had a positive reception toward the social media integration at the bottom. Points of feedback included having more arena imagery and creating more visual unity with the event photo and description in the top carousel.</p>
            {/* images and designs here */}
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
}