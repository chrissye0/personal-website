import flossBossImage from "../../assets/floss-boss-gameplay.png";
import flossBossBrainstorm1 from "../../assets/floss-boss-brainstorm-1.PNG";
import flossBossBrainstorm2 from "../../assets/floss-boss-brainstorm-2.png";
import flossBossTimeline from "../../assets/floss-boss-timeline.png";
import flossBossProcess1 from "../../assets/floss-boss-process-1.jpg";
import flossBossProcess2 from "../../assets/floss-boss-process-2.jpg";
import flossBossProcess3 from "../../assets/floss-boss-process-3.jpg";
import flossBossProcess4 from "../../assets/floss-boss-process-4.jpg";
import flossBossSetup from "../../assets/floss-boss-setup.MOV";
import flossBossPlaytestVideo from "../../assets/floss-boss-playtest-video.MOV";
import flossBossGroup from "../../assets/floss-boss-group.JPEG";
import flossBossBrush from "../../assets/floss-boss-brush.png";
import flossBossBrushing from "../../assets/floss-boss-brushing.png";
import flossBossSet from "../../assets/floss-boss-set.png";
import flossBossTerminal from "../../assets/floss-boss-terminal.png";
import flossBossGDC1 from "../../assets/floss-boss-gdc-1.jpg";
import flossBossGDC2 from "../../assets/floss-boss-gdc-2.jpg";
import flossBossGDC3 from "../../assets/floss-boss-gdc-3.jpg";
import flossBossGDC4 from "../../assets/floss-boss-gdc-4.jpg";
import flossBossGDC5 from "../../assets/floss-boss-gdc-5.jpg";
import flossBossGDC6 from "../../assets/floss-boss-gdc-6.jpg";


import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

import "../../styles/App.css";
import "../../styles/Project.css";

export default function FlossBoss() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Overview", "Goals", "Brainstorming", "Development", "Playtesting & Feedback", "Results", "Takeaways"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>Floss Boss</h1>
            <p>An alternative interface interactive experience presented to 20,000+ attendees at the GDC Festival of Gaming as an alt.ctrl.GDC competition finalist.</p>
            <header className="project-mini-headers">
              <section className="links">
                <h4>Links</h4>
                <h3><a href="https://github.com/chrissye0/floss-boss" target="_blank" rel="noopener noreferrer">Github</a></h3>
                <h3><a href="https://flossboss.framer.website/" target="_blank" rel="noopener noreferrer">Website</a></h3>
              </section>
              <section className="role">
                <h4>Role</h4>
                <h3>UI/UX Engineer, Lead Game Developer</h3>
              </section>
              <section className="timeline">
                <h4>Timeline</h4>
                <h3>Sept 2025 - May 2026</h3>
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
            <section className="project-page-image">
              <img src={flossBossImage} alt="floss boss image" />
            </section>
          </header>
          <article className="flossboss-overview" id="Overview">
            <h2>Overview</h2>
            <p>With a team of 4 developers and 6 designers, we created Floss Boss, an interactive experience in which users become a tiny shrimp hero scrubbing and flossing a lake monster's massive teeth! Using an oversized toothbrush and flosser controllers, two players physically brush and floss teeth to attack bacteria scuds in real time, creating a playful, full-body, high-energy experience impossible with traditional game controls.</p>
            <section className="flossboss-gdc">
              <iframe width="854px" height="480px"
                src="https://www.youtube.com/embed/3P0t6EmyHPo?si=sbaCcwMReRfNEs8d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe>
            </section>
          </article>
          <article className="flossboss-goals" id="Goals">
            <h2>Goals</h2>
            <h3>We need to make an engaging alternative controller experience for alt.ctrl.GDC.</h3>
            <p><b>Our primary goal was to create an alternative controller experience for</b> <a href="https://gdconf.com/alt-ctrl-gdc/">alt.ctrl.GDC</a>, a competitive alternative controller project showcase within the GDC Festival of Gaming. At alt.ctrl.GDC, the target audience is developers aged 20 to 40. This audience would have a strong understanding of the mechanics of our project and would be interested in seeing how everything connects to make the final project function.</p>
            <p>Our other primary exhibition location is <a href="https://www.rit.edu/imagine/">ImagineRIT</a>, our university's creativity and innovation showcase. There, the target audiences are RIT students seeking to learn and families with young children from ages 5-12.</p>
            <p>All this considered, <b>our goal was to make a unique and engaging interactive experience that could be enjoyed by people of all ages and backgrounds.</b></p>
          </article>
          <article className="flossboss-brainstorming" id="Brainstorming">
            <h2>Brainstorming</h2>
            <p>We sought to create a unique, immersive experience for users by instilling childlike wonder through our theme and designs. With our controllers, we wanted to add joy and whimsy to the mundane, leading us to the concept of brushing teeth (but massive)!</p>
            <p>After cementing our concept, we collectively worked on ideating the user experience, specifically how they would interact with our digital and physical interfaces. The earliest iterations of our project involved projection mapping, 3D printing, and 3 alternative controllers - a toothbrush, a floss pick, and a mouthwash gun.</p>
            <section className="flossboss-brainstorm-images">
              <img src={flossBossBrainstorm1} alt="floss boss brainstorm 1" />
              <img src={flossBossBrainstorm2} alt="floss boss brainstorm 2" />
            </section>
            <p>Designers began prototyping the first iterations of the digital experience and sketching concepts of our physical set. Developers drafted a technical proposal, outlining the required hardware materials, minimum viable products versus optimum products, mitigation plans, and the project architecture.</p>
          </article>
          <article className="flossboss-development" id="Development">
            <h2>Development</h2>
            <p>Given the scope and our small timeline from September to November, as we were implementing our project, we reevaluated our goals and decided to cut some of our initial ideas, such as the mouthwash gun. With our budget, 3D printing was not a viable solution. Projection mapping also would not have worked given the size of our set and our open alt.ctrl.GDC exhibition space. We ultimately decided on a toothbrush and flosspick as our controllers and a completely customized handmade set.</p>
            <img src={flossBossTimeline} alt="floss boss timeline" />
            <p>Designers built assets and prototypes primarily in Figma, with animation assets being made in Rive. For the code, us developers utilized JavaScript, HTML, and CSS in a Node.js runtime environment and C++ with Arduino for the physical hardware. We worked collaboratively on crafting a physical set with papier-mache teeth, foam gums, and the giant toothbrush and flosspick.</p>
            <p>As the team's lead developer, I was responsible for connecting the data from our hardware to the game itself. Brushing is tracked via light detection with photoresistors, and flossing is tracked with capacitive sensing. This data is then sent to the game page to dynamically update the screen and play animations.</p>
            <section className="flossboss-process-images">
              <img src={flossBossProcess1} alt="floss boss process image" />
              <img src={flossBossProcess2} alt="floss boss process image" />
              <img src={flossBossProcess3} alt="floss boss process image" />
              <img src={flossBossProcess4} alt="floss boss process image" />
            </section>
            <p>On the game development side, I encountered two major challenges, namely integrating the animations and ensuring proper detection. Designers used the collaborative editor tool Rive to create the animations that composed the majority of the game's experience, including but not limited to decay, brushing, and flossing. As a result, I learned how to integrate Rive's in-built state machines to generate Rive instances for each tooth sprite. While it was a struggle to pick up a new platform, proper communication with the design team facilitated successful animation integration!</p>
            <p>Similarly, I had to consult with the other developers who worked on the hardware to ensure proper data transfer between the server-side and the client-side. The sensor data is sent to the game page from the server side through a single socket connection. With JS, HTML, and CSS, the frontend interprets this data to update the visuals in real time and make the game interactive.</p>
          </article>
          <article className="flossboss-playtesting" id="Playtesting & Feedback">
            <h2>Playtesting & Feedback</h2>
            <p>We had multiple opportunities to playtest our work among students and faculty members within the RIT community. At each, we assembled our physical set, wired and connected it to our Arduino, and set up the game experience on a large screen. Playtesters would then wield the toothbrush and flosspick to clean the teeth standing before them.</p>
            <section className="flossboss-video">
              <video width="600" height="auto" autoPlay loop muted>
                <source src={flossBossSetup} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video width="600" height="auto" autoPlay loop muted>
                <source src={flossBossPlaytestVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={flossBossBrush} alt="floss boss process image" />
              <img src={flossBossBrushing} alt="floss boss process image" />
              <img src={flossBossTerminal} alt="floss boss process image" />
              <img src={flossBossSet} alt="floss boss process image" />
            </section>
            <p>We received ample feedback from playtesters as well as recommendations from professors to improve the user experience. We gradually tweaked our photoresistor light detection, and users also provided ideas on improving the game's flow. Playtesting revealed that tooth-related animations were easy to miss near the bottom of the screen. We updated the UI so Scuds momentarily pop upward before attacking, making them more noticeable. Brushing animations also became clearer, as each tooth now fills with bubbles until the tooth is fully cleaned. In later testing, we adjusted the game's length from 90 seconds to 60 seconds to account for larger audiences and shorter experiences. We also adjusted brushing and flossing decay rates to ensure a balanced experience between both players.</p>
          </article>
          <article className="flossboss-altctrlgdc" id="Results">
            <h2>Results</h2>
            <p>Finally, from March 9 to 13, we showcased Floss Boss at alt.ctrl.GDC! Feedback was overwhelmingly positive, and so many of our players reported having fun! We also had the privilege of presenting our project via gameplay and interviews with various content creators and news outlets!</p>
            <section className="flossboss-gdc-images">
              <img src={flossBossGDC1} alt="floss boss gdc image" />
              <img src={flossBossGDC2} alt="floss boss gdc image" />
              <img src={flossBossGDC3} alt="floss boss gdc image" />
              <img src={flossBossGDC4} alt="floss boss gdc image" />
              <img src={flossBossGDC5} alt="floss boss gdc image" />
              <img src={flossBossGDC6} alt="floss boss gdc image" />
            </section>
          </article>
          <article className="flossboss-results" id="Takeaways">
            <h2>Takeaways</h2>
            <p>It was my first time working on a project of this scale with such a large team, and I undoubtedly learned a lot about game development, hardware integration, user feedback, and multidisciplinary team collaboration! Seeing so many people actively enjoy our game at GDC made the endless hours spent debugging code, playtesting, and painstakingly handcrafting a physical set all the more worth it. Video games and their endless potential for creativity, storytelling, and human connection have always held a special place in my heart, so it was an absolute honor to share a silly project about cleaning teeth with the same people who made me who I am today.</p>
            <p>In late April, we presented Floss Boss again as part of our university's showcase, ImagineRIT!</p>
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