import flossBossImage from "../../assets/floss-boss-gameplay.png";
import flossBossProcess1 from "../../assets/floss-boss-process-1.jpg";
import flossBossProcess2 from "../../assets/floss-boss-process-2.jpg";
import flossBossProcess3 from "../../assets/floss-boss-process-3.jpg";
import flossBossProcess4 from "../../assets/floss-boss-process-4.jpg";
import flossBossSetup from "../../assets/floss-boss-setup.MOV";
import flossBossPlaytestVideo from "../../assets/floss-boss-playtest-video.MOV";
import flossBossGroup from "../../assets/floss-boss-group.JPG";

import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

import "../../styles/App.css";
import "../../styles/Project.css";

export default function FlossBoss() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Overview", "Process", "Playtesting & Feedback", "Results"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>Floss Boss</h1>
            <p>An alternative interface interactive experience to be presented to 30,000+ attendees at the GDC Festival of Gaming as a competition finalist.</p>
            <header className="project-mini-headers">
              <section className="role">
                <h4>Role</h4>
                <h3>Lead Software Developer</h3>
              </section>
              <section className="timeline">
                <h4>Timeline</h4>
                <h3>Sept 2025 - Current</h3>
              </section>
              <section className="timeline">
                <h4>Links</h4>
                <h3><a href="https://github.com/chrissye0/floss-boss" target="_blank" rel="noopener noreferrer">Github</a></h3>
                <h3><a href="https://flossboss.framer.website/" target="_blank" rel="noopener noreferrer">Website</a></h3>
              </section>
              <section className="tools">
                <h4>Tools</h4>
                <section className="project-page-tags">
                  <button className="project-skill">JavaScript</button>
                  <button className="project-skill">Node.js</button>
                  <button className="project-skill">HTML</button>
                  <button className="project-skill">CSS</button>
                  <button className="project-skill">C++</button>
                  <button className="project-skill">Arduino</button>
                  <button className="project-skill">Rive</button>
                  <button className="project-skill">Web Development</button>
                  <button className="project-skill">Game Development</button>
                </section>
              </section>
            </header>
            <br />
            <section className="project-page-image">
              <img src={flossBossImage} alt="floss boss image" />
            </section>
          </header>
          <br />
          <article className="flossboss-overview" id="Overview">
            <h2>Overview</h2>
            <p>With a team of 4 developers and 6 designers, we created Floss Boss, an alternative interface interactive experience in which users play as a shrimp in the mouth of a giant sea creature. The core gameplay mechanic relies on players wielding a comically large toothbrush and floss pick to scrub bacteria off giant teeth.</p>
            <p>Designers built assets and prototypes primarily in Figma, with animation assets being made in Rive. For the code, we developers utilized JavaScript, HTML, and CSS in a Node.js runtime environment for the front-end and C++ with Arduino for the physical hardware. In addition, we collectively worked on crafting a physical set with papier-mache teeth, foam gums, and the giant toothbrush and flosspick.</p>
            <p>In November, we officially submitted our project to <a href="https://gdconf.com/alt-ctrl-gdc">alt.ctrl.GDC</a>, an alternative interface project showcase under the GDC Festival of Gaming conference. A month later, we were accepted as a finalist and are slated to present Floss Boss at GDC in March 2026!</p>
            <br />
            <section className="project-page-image">
              <iframe width="854px" height="480px"
                src="https://www.youtube.com/embed/3P0t6EmyHPo?si=sbaCcwMReRfNEs8d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </section>
            <br />
          </article>
          <article className="flossboss-process" id="Process">
            <h2>Process</h2>
            <p>As the team's lead software developer, I was responsible for connecting the data from our hardware to the game itself. Brushing is tracked via light detection with photoresistors, and flossing is tracked with capacitive sensing. This data is then sent to the game page to dynamically update the screen and play animations.</p>
            <section className="flossboss-process-images">
              <img src={flossBossProcess1} alt="floss boss process image" />
              <img src={flossBossProcess2} alt="floss boss process image" />
              <img src={flossBossProcess3} alt="floss boss process image" />
              <img src={flossBossProcess4} alt="floss boss process image" />
            </section>
            <p>On the game development side, I encountered two major challenges, namely integrating the animations and ensuring proper detection. Designers used the collaborative editor tool Rive to create the animations that composed the majority of the game's experience, including but not limited to decay, brushing, and flossing. As a result, I learned how to integrate Rive's in-built state machines to generate Rive instances for each tooth sprite. To indicate a tooth decaying or being cleaned, I would trigger their respective states after a certain time interval. When a tooth is properly brushed or flossed, the animation plays and the user's score increments. While it was a struggle to pick up a new platform, proper communication with the design team facilitated successful animation integration.</p>
            <p>Similarly, I had to consult with the other developers who worked on the hardware to ensure proper data transfer between the server-side and the client-side. The sensor data is sent to the game page from the server side through a single socket connection. With JS, HTML, and CSS, the frontend interprets this data to update the visuals in real time and make the game interactive.</p>
          </article>
          <article className="flossboss-playtesting" id="Playtesting & Feedback">
            <h2>Playtesting & Feedback</h2>
            <p>We had multiple opportunities to playtest our work among students and faculty members within the RIT community. At each, we assembled our physical set, wired and connected it to our Arduino, and set up the game experience on a large screen. Playtesters would then wield the toothbrush and flosspick to clean the teeth standing before them.</p>
            <p>We received ample feedback from playtesters as well as recommendations from professors to improve the user experience. We gradually tweaked our photoresistor light detection, and users also provided ideas on improving the game's flow. Playtesting revealed that tooth-related animations were easy to miss near the bottom of the screen. We updated the UI so Scuds momentarily pop upward before attacking, making them more noticeable. Brushing animations also became clearer, as each tooth now fills with bubbles until the tooth is fully cleaned.</p>
            <br />
            <section className="flossboss-video">
              {/* <video width="600" height="auto" autoPlay loop muted>
                <source src={flossBossTimelapse} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <video width="600" height="auto" autoPlay loop muted>
                <source src={flossBossSetup} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video width="600" height="auto" autoPlay loop muted>
                <source src={flossBossPlaytestVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
          </article>
          <article className="flossboss-results" id="Results">
            <h2>Results</h2>
            <p>In March 2026, we will be presenting Floss Boss at alt.ctrl.GDC within the GDC Festival of Gaming. In April 2026, we will be presenting it at <a href="https://www.rit.edu/imagine">ImagineRIT</a>, our university's annual innovative project showcase.</p>
            <br />
            <section className="project-page-image">
              <img src={flossBossGroup} alt="floss boss group image" />
            </section>
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
}