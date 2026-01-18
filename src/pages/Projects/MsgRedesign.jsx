import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import msgProcessImage from "../../assets/msg-redesign-process.png";
import msgPrototypeV1 from "../../assets/1440-v1.png";
import msgPrototypeV2 from "../../assets/1440-v2.png";
import msgPrototypeV3 from "../../assets/1440-v3.png";
import msgPrototypeV4 from "../../assets/1440-v4.png";
import msgPrototypeV5A from "../../assets/1440-v5A.png";
import msgPrototypeV5B from "../../assets/1440-v5B.png";
import msgPrototypeV6A from "../../assets/1440-v6A.png";
import msgPrototypeV6B from "../../assets/1440-v6B.png";

export default function MsgRedesign() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Problem", "Goals", "Process", "Competitive Analysis", "Design Iterations", "A/B Testing", "Results"]} />
        <section className="project-content">
          <h1>MSG.com Redesign</h1>
          <p>A redesign project of Madison Square Garden's venue landing page done during my Digital Product Design summer internship at Madison Square Garden. The project involved team brainstorming sessions, iterative Figma prototyping, and quantitative and qualitative user research.</p>
          <header className="project-mini-headers">
            <section className="role">
              <h4>Role</h4>
              <h3>UI/UX Designer</h3>
            </section>
            <section className="timeline">
              <h4>Timeline</h4>
              <h3>May 2024 - August 2024</h3>
            </section>
            <section className="tools">
              <h4>Tools</h4>
              <section className="project-page-tags">
                <button className="project-skill">Figma</button>
                <button className="project-skill">User Research</button>
                <button className="project-skill">Competitive Analysis</button>
                <button className="project-skill">UserTesting</button>
              </section>
            </section>
          </header>
          {/** prototype image */}
          <article className="msg-problem" id="Problem">
            <h2>Problem</h2>
            <h3>MSG.com users believe there's an imbalance of event and venue information and show little click interactivity on the homepage.</h3>
          </article>
          <article className="msg-goals" id="Goals">
            <h2>Goals</h2>
            <section className="project-page-tags">
              <button className="project-skill">Improve the user experience</button>
              <button className="project-skill">Increase interactivity</button>
              <button className="project-skill">Have less repetitive content</button>
              <button className="project-skill">Maintain visual appeal</button>
              <button className="project-skill">List more events</button>
              <button className="project-skill">Display more event information</button>
              <button className="project-skill">Increase SEO</button>
              <button className="project-skill">Promote other MSG platforms</button>
            </section>
          </article>
          <article className="msg-process" id="Process">
            <h2>Process</h2>
            <img src={msgProcessImage} alt="process image" width={"50%"} height={"auto"} />
          </article>
          <article className="competitive-analysis" id="Competitive Analysis">
            <h2>Competitive Analysis</h2>
            <p>My first batch of user tests was conducted for a competitive analysis, in which I compared the MSG.com homepage with those of four competitor venue homepages: Barclays Center, Climate Pledge Arena, T-Mobile Arena, and Crypto.com Arena. I had screening questions, such that the test targeted specifically venue ticket buyers, and had users rate the homepages on their design, navigation, and ease of use. I also collected the Net Promoter Scores of each site and general user feedback. I evaluated the strengths and weaknesses of each venue and compared them to those of the MSG.com homepage. I then presented my findings to the Digital Experience team as well as some members of the Sports and Marketing teams. From there, I began my first design mockups of the homepage.</p>
          </article>
          <article className="msg-iterations" id="Design Iterations">
            <h2>Design Iterations</h2>
            <section className="msg-prototypes">
              <img src={msgPrototypeV1} alt="prototype 1 image" />
              <img src={msgPrototypeV2} alt="prototype 2 image" />
              <img src={msgPrototypeV3} alt="prototype 3 image" />
              <img src={msgPrototypeV4} alt="prototype 4 image" />
            </section>
          </article>
          <article className="msg-ab-testing" id="A/B Testing">
            <h2>A/B Testing</h2>
            <p>After some design feedback from my team, I settled on two mockup designs I was confident in. The differences between the two included the “Plan Your Visit” section and the event carousel at the top. In the first version, “Plan Your Visit” is at the bottom. The user can click through photos of the arena, and to the right, the user can read general venue information and navigate to their respective pages. The version on the right contains the icons and boxes from before and is instead higher up on the homepage. For the carousel, the bar at the bottom with the navigation arrows is different, with one being an extension of the arena background and the other having a dark blue background.</p>
            <p>At this point, I conducted an A/B test asking users to scroll through both prototypes individually, express their thoughts, note any differences between the two, and then see them both side-by-side. Results from the test showed people preferred “Plan Your Visit” being at the top, as they would have to scroll down past all the events in the other version. The icons also made the design more readable and accessible for users. There weren’t many strong opinions regarding the carousel, but some cited that the dark blue bar made the design less busy and more “modern.” I went forward with the 2nd mockup by replacing placeholders with imagery and event content and finally conducted another A/B test comparing this mockup and the current MSG.com website.</p>
            <section className="msg-prototypes-AB">
              <img src={msgPrototypeV5A} alt="prototype 5A" />
              <img src={msgPrototypeV5B} alt="prototype 5B" />
            </section>
            <p>The results from the 2nd A/B test showed that most tested users preferred my prototype to the official website. They liked the use of icons and imagery and how more events were displayed and organized. People could more easily find an event they liked directly from the homepage and icons pointed toward a more user-friendly and accessible design. Users also had a positive reception toward the social media integration at the bottom. Points of feedback included having more arena imagery and creating more visual unity with the event photo and description in the top carousel.</p>
            <section className="msg-prototypes-AB">
              <img src={msgPrototypeV6A} alt="prototype 6A" />
              <img src={msgPrototypeV6B} alt="prototype 6B" />
            </section>
          </article>
          <article className="msg-results" id="Results">
            <h2>Results</h2>
            <section className="msg-results-stats">
              <h3>87.5%</h3>
              <p style={{ margin: "25px 5px" }}>of users preferred the newest prototype over the current website version.</p>
            </section>
            <section className="msg-results-sections">
              <section className="msg-results-imagery">
                <h4>Imagery</h4>
                <p>Users liked the use of icons and imagery, which created a more accessible and visually appealing design.</p>
              </section>
              <section className="msg-results-organization">
                <h4>Organization</h4>
                <p>Users appreciated how the events were displayed, as they could now easily find events they liked directly from the venue landing page.</p>
              </section>
              <section className="msg-results-social-media">
                <h4>Organization</h4>
                <p>Users appreciated how the events were displayed, as they could now easily find events they liked directly from the venue landing page.</p>
              </section>
            </section>
          </article>
          {/* <article className="msg-competitive-analysis" id="Competitive Analysis">
            <h2>Competitive Analysis</h2>
            <p>My first batch of user tests was for a competitive analysis, in which I compared the MSG.com homepage with that of competitor venue homepages, more specifically Barclays Center, Climate Pledge Arena, T-Mobile Arena, and Crypto.com Arena. I had screening questions (such that the test targeted specifically venue ticket buyers) and had users rate the homepages based on their design, navigation, and ease of use. I also collected the Net Promoter Scores of each site and general user feedback. I evaluated the strengths and weaknesses of each venue and compared them to those of the MSG.com homepage and presented findings to the Digital Experience team as well as some from the Sports and Marketing teams. I then created my first few design mockups of the homepage, as seen below.</p>
          </article>
          <article className="msg-process" id="Process">
            <h2>Process</h2>
            <p>After some design feedback from my team, I settled on two mockup designs I was confident in. The differences between the two included the “Plan Your Visit” section and the event carousel at the top. In the first version, Plan Your Visit is at the bottom. The user can click through photos of the arena, and to the right, the user can read general venue information and navigate to their respective pages. The version on the right contains the icons and boxes from before and is instead higher up on the homepage. For the carousel, the bar at the bottom with the navigation arrows is different, with one being an extension of the arena background and the other having a dark blue background.</p>
            <p>At this point, I conducted an A/B test asking users to scroll through both prototypes individually, express their thoughts, note any differences between the two, and then see them both side-by-side. Results from the test showed people preferred “Plan Your Visit” being at the top, as they would have to scroll down past all the events in the other version. The icons also made the design more readable and accessible for users. There weren’t many strong opinions regarding the carousel, but some cited that the dark blue bar made the design less busy and more “modern.” I went forward with the 2nd mockup by replacing placeholders with imagery and event content and finally conducted another A/B test comparing this mockup and the current MSG.com website.</p>
          </article> */}
        </section>
      </section>
      <Footer />
    </>
  );
}