import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import msgComputerPrototype from "../../assets/msg-computer-prototype.png";
import msgProcessImage from "../../assets/msg-redesign-process.png";
import msgPrototypeV1 from "../../assets/1440-v1.png";
import msgPrototypeV2 from "../../assets/1440-v2.png";
import msgPrototypeV3 from "../../assets/1440-v3.png";
import msgPrototypeV4 from "../../assets/1440-v4.png";
import msgPrototypeV5A from "../../assets/1440-v5A.png";
import msgPrototypeV5B from "../../assets/1440-v5B.png";
import msgPrototypeV6A from "../../assets/1440-v6A.png";
import msgPrototypeV6B from "../../assets/1440-v6B.png";

import "../../styles/App.css";
import "../../styles/Project.css";

export default function MsgRedesign() {
  return (
    <>
      <section className="project-page">
        <Sidebar nav={["Overview", "Goals", "Brainstorming", "Competitive Analysis", "Design Iterations", "A/B Testing", "Results", "Takeaways"]} />
        <section className="project-content">
          <header className="project-header">
            <h1>MSG.com Redesign</h1>
            <p>A redesign project of Madison Square Garden's venue landing page.</p>
            <header className="project-mini-headers">
              <section className="links">
                <h4>Links</h4>
                <h3><a href="/MSGCaseStudy.pdf" target="_blank" rel="noopener noreferrer">Case Study</a></h3>
              </section>
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
                  <button className="project-skill">Product Design</button>
                  <button className="project-skill">User Research</button>
                  <button className="project-skill">Competitive Analysis</button>
                  <button className="project-skill">A/B Testing</button>
                  <button className="project-skill">UserTesting</button>
                </section>
              </section>
            </header>
            <section className="project-page-image">
              <img src={msgComputerPrototype} alt="msg prototype image" />
            </section>
          </header>
          <article className="msg-overview" id="Overview">
            <h2>Overview</h2>
            <p>This is a redesign project of Madison Square Garden's venue landing page done during my Digital Product Design summer internship. The project involved team brainstorming sessions, iterative Figma prototyping, and quantitative and qualitative user research.</p>
            <img src={msgProcessImage} alt="process image" width={"100%"} height={"auto"} />
          </article>
          <article className="msg-goals" id="Goals">
            <h2>Goals</h2>
            <h3>Improve overall Madison Square Garden brand perception by delivering best-in-class experience through innovative features.</h3>
            <p>Based on previous quantitative and qualitative user research findings, MSG.com users saw an imbalance of event and venue information and showed little click interactivity on the homepage. As a result, we sought to also increase interactivity and display the right amount of event information. Success was measured via user research studies and NPS.</p>
          </article>
          <article className="msg-brainstorming" id="Brainstorming">
            <h2>Brainstorming</h2>
            <p>Before beginning the project, we held a Figjam brainstorming session in collaboration with other MSG teams. With the rest of the Digital Experience team, Marketing, and our Sports teams, we identified our strengths, pain points, and opportunities for improvement. </p>
                        <section className="project-page-tags">
              <button className="project-skill">Improve the user experience</button>
              <button className="project-skill">Increase interactivity</button>
              <button className="project-skill">Have less repetitive content</button>
              <button className="project-skill">Maintain visual appeal</button>
              <button className="project-skill">List more events</button>
              <button className="project-skill">Display more event information</button>
              <button className="project-skill">Increase SEO</button>
              <button className="project-skill">Promote other MSG platforms</button>
              <button className="project-skill">Have social media integration</button>
            </section>
          </article>
          <article className="competitive-analysis" id="Competitive Analysis">
            <h2>Competitive Analysis</h2>
            <p>We had 4 sets of competitive analysis user tests, each with a sample of 7 users. Our target audience included both users who used venue websites before and those that have not. Each set compared the MSG homepage with the homepage of one of its competitors, namely <b>Climate Pledge Arena</b>, <b>Crypto Arena</b>, <b>T-Mobile Arena</b>, and <b>Barclays Center</b>.</p>
            <p>After viewing both homepages, we asked users to rate visual appeal, intuitiveness, and if it met their expectations. We also collected net promoter scores (NPS) for both venues for each individual test. As part of the test, we tasked users to find a concert ticket in July and comment on their experience. We asked for overall rankings at the end and for general ideas on improving the MSG homepage.</p>
            <section className="competitive-analysis-findings">
              <section className="competitive-analysis-finding">
                <h3>MSG vs. Climate Pledge Arena</h3>
                <section className="nps-scores">
                  <section className="nps">
                    <h4>57</h4>
                    <p>Climate Pledge Arena NPS</p>
                  </section>
                  <section className="nps">
                    <h4>71</h4>
                    <p>MSG NPS</p>
                  </section>
                </section>
                <ul>
                  <li>MSG was more visually appealing, but people liked the dark green theme and interactive components of Climate Pledge</li>
                  <li>MSG provided more general venue info than Climate Pledge</li>
                  <li>Users liked the Plan Your Trip section on Climate Pledge</li>
                </ul>
              </section>
              <section className="competitive-analysis-finding">
                <h3>MSG vs. Barclays Center</h3>
                <section className="nps-scores">
                  <section className="nps">
                    <h4>43</h4>
                    <p>Barclays Center NPS</p>
                  </section>
                  <section className="nps">
                    <h4>71</h4>
                    <p>MSG NPS</p>
                  </section>
                </section>
                <ul>
                  <li>Barclays was busier and overwhelming, but had a larger focus on events</li>
                  <li>Barclays had an entire event grid view on the homepage</li>
                </ul>
              </section>
              <section className="competitive-analysis-finding">
                <h3>MSG vs. T-Mobile Arena</h3>
                <section className="nps-scores">
                  <section className="nps">
                    <h4>14</h4>
                    <p>T-Mobile Arena NPS</p>
                  </section>
                  <section className="nps">
                    <h4>71</h4>
                    <p>MSG NPS</p>
                  </section>
                </section>
                <ul>
                  <li>T-Mobile's homepage had a white background and simple color scheme that some thought to be plain, while others thought they made the homepage look clean</li>
                  <li>People liked T-Mobile's large event tiles</li>
                  <li>They didn't like how T-Mobile's event info only showed on hover</li>
                </ul>
              </section>
              <section className="competitive-analysis-finding">
                <h3>MSG vs. Crypto Arena</h3>
                <section className="nps-scores">
                  <section className="nps">
                    <h4>-14</h4>
                    <p>Crypto Arena NPS</p>
                  </section>
                  <section className="nps">
                    <h4>71</h4>
                    <p>MSG NPS</p>
                  </section>
                </section>
                <ul>
                  <li>Users found MSG to be a lot more visually appealing than Crypto, which just had a plain white background</li>
                  <li>MSG had "more flair without sacrificing readability or content"</li>
                </ul>
              </section>
            </section>
          </article>
          <article className="msg-iterations" id="Design Iterations">
            <h2>Design Iterations</h2>
            <p>Using information from both the brainstorming session and the competitive analysis, I considered how we could showcase information without overwhelming users. In this process, my goals were to better organize venue and event information, increase user engagement, showcase and promote more events, and enhance visual appeal and navigation. I iterated through multiple Figma prototypes with the MSG.com design system to achieve this.</p>
            <section className="msg-prototypes">
              <img src={msgPrototypeV1} alt="prototype 1 image" />
              <img src={msgPrototypeV2} alt="prototype 2 image" />
              <img src={msgPrototypeV3} alt="prototype 3 image" />
              <img src={msgPrototypeV4} alt="prototype 4 image" />
            </section>
          </article>
          <article className="msg-ab-testing" id="A/B Testing">
            <h2>A/B Testing</h2>
            <h3>A/B Test 1</h3>
            <p>After some design feedback from my team, I settled on two mockup designs I was confident in. The differences between the two included the “Plan Your Visit” section and the event carousel at the top. In the first version, “Plan Your Visit” is at the bottom. The user can click through photos of the arena, and to the right, the user can read general venue information and navigate to their respective pages. The version on the right contains the icons and boxes from before and is instead higher up on the homepage. For the carousel, the bar at the bottom with the navigation arrows is different, with one being an extension of the arena background and the other having a dark blue background.</p>
            <p>At this point, I conducted an A/B test asking users to scroll through both prototypes individually, express their thoughts, note any differences between the two, and then see them both side-by-side. Results from the test showed people preferred “Plan Your Visit” being at the top, as they would have to scroll down past all the events in the other version. The icons also made the design more readable and accessible for users. There weren't many strong opinions regarding the carousel, but some cited that the dark blue bar made the design less busy and more “modern.” I went forward with the 2nd mockup by replacing placeholders with imagery and event content and finally conducted another A/B test comparing this mockup and the current MSG.com website.</p>
            <section className="msg-prototypes-AB">
              <img src={msgPrototypeV5A} alt="prototype 5A" />
              <img src={msgPrototypeV5B} alt="prototype 5B" />
            </section>
            <br />
            <h3>A/B Test 2</h3>
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
                <h4>Social Media</h4>
                <p>Users liked the social media integration at the bottom of the page, showcasing users' recent experiences at the venue.</p>
              </section>
            </section>
          </article>
          <article className="msg-takeaways" id="Takeaways">
            <h2>Takeaways</h2>
            <p>This was my first major UI/UX project in a professional environment, and I learned so much about the design process and qualitative user research! Given the fact that this was the homepage, I started out with many concerns on taking up this project. However, I adjusted and learned along the way! I ensured I maintained communication with the rest of the Digital Experience team, asking questions, gathering feedback, and always keeping them updated. This was also my first time conducting user research, and I realized I thoroughly enjoyed constructing tests and evaluating user responses! The final user test validated my design decisions and it was such a fulfilling experience to see my project reach fruition.</p>
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
}