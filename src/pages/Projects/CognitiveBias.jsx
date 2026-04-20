import Footer from "../../components/Footer.jsx";
import Sidebar from "../../components/Sidebar.jsx";

import cognitiveBiasImage from "../../assets/cognitive-bias.png";
import cognitiveBiasBrainstorming1 from "../../assets/cognitivebias-brainstorming-1.jpeg";
import cognitiveBiasBrainstorming2 from "../../assets/cognitivebias-brainstorming-2.jpeg";
import cognitiveBiasBrainstorming5 from "../../assets/cognitivebias-brainstorming-5.jpeg";
import cognitiveBiasBrainstorming6 from "../../assets/cognitivebias-brainstorming-6.jpg";
import cognitiveBiasRanking from "../../assets/cognitivebias-ranking.png";
import cognitiveBiasAI1 from "../../assets/cognitivebias-ai1.png";
import cognitiveBiasAI2 from "../../assets/cognitivebias-ai2.png";
import cognitiveBiasWiki from "../../assets/cognitivebias-wiki.png";
import cognitiveBiasPopup from "../../assets/cognitivebias-popup.png";
import cognitiveBiasDisclaimer from "../../assets/cognitivebias-disclaimer.png";
import cognitiveBiasColors from "../../assets/cognitivebias-colors.jpg";
import cognitiveBiasFonts from "../../assets/cognitivebias-fonts.jpg";
import cognitiveBiasParagraphs from "../../assets/cognitivebias-paragraphs.jpg";
import cognitiveBiasResultsRanking from "../../assets/cognitivebias-results-ranking.png";
import cognitiveBiasResultsAI from "../../assets/cognitivebias-results-ai.png";

import "../../styles/App.css";
import "../../styles/Project.css";

export default function CognitiveBias() {
    return (
        <>
            <section className="project-page">
                <Sidebar nav={["Overview", "Goals", "Research", "Brainstorming", "Development", "Design System", "Results", "Takeaways"]} />
                <section className="project-content">
                    <header className="project-header">
                        <h1>Cognitive Bias & Generative AI Lab</h1>
                        <p>An educational lab about human cognitive biases and trust in generative AI outputs.</p>
                        <header className="project-mini-headers">
                            <section className="links">
                                <h4>Links</h4>
                                <h3><a href="https://all.rit.edu/Lab13/" target="_blank" rel="noopener noreferrer">Lab</a></h3>
                            </section>
                            <section className="role">
                                <h4>Role</h4>
                                <h3>UI/UX Designer</h3>
                            </section>
                            <section className="timeline">
                                <h4>Timeline</h4>
                                <h3>Oct 2025 - Present</h3>
                            </section>
                            <section className="tools">
                                <h4>Tools</h4>
                                <section className="project-page-tags">
                                    <button className="project-skill">Figma</button>
                                    <button className="project-skill">Design Systems</button>
                                    <button className="project-skill">Product Design</button>
                                </section>
                            </section>
                        </header>
                        <section className="project-page-image">
                            <img src={cognitiveBiasImage} alt="Cognitive Bias & Generative AI Lab" />
                        </section>
                    </header>
                    <article className="cognitivebias-overview" id="Overview">
                        <h2>Overview</h2>
                        <p>This was one of the educational lab projects I worked on under <a href="https://all.rit.edu/" target="_blank" rel="noopener noreferrer">Accessible Learning Labs (ALL)</a>, an NSF-funded initiative to promote STEM and accessibility education. I am ALL’s primary UI/UX designer and lead all design processes for their interactive labs, including the processes for this one! I worked cross-collaboratively with our software developers, product managers, and stakeholders (university faculty) throughout the lab's development. As I was working on this project, I also made updates to the ALL design system to better align with its current branding.</p>
                    </article>
                    <article className="cognitivebias-goals" id="Goals">
                        <h2>Goals</h2>
                        <h3>Create an interactive exploration of how cognitive biases shape our trust in generative AI systems.</h3>
                        <p>The lab should be easy in difficulty and is intended for younger (9th-12th graders) and nontechnical audiences. Given the prevalence of AI in our current technological climate, it is important for those most susceptible to AI hallucinations to understand that AI outputs may be biased or untruthful. This lab explores how users' cognitive biases can affect their trust in AI outputs, even when they are inaccurate or misleading, and introduces design strategies to mitigate these biases and promote more informed decision-making.</p>
                    </article>
                    <article className="cognitivebias-research" id="Research">
                        <h2>Research</h2>
                        <p>We narrowed our focus to three specific forms of cognitive biases, namely the Halo Effect, Authority Bias, and the Dunning-Kruger effect. I worked with our developers to research each of these biases, reviewing articles, videos, and psychological papers, especially any previous work on their applications to trust in generative AI.</p>
                        <section className="cognitivebias-research-insights">
                            <section className="cognitivebias-research-insight">
                                <h3>Halo Effect</h3>
                                <p>The halo effect is when a single positive characteristic or polished presentation influences your overall perception of something. If information is presented professionally or sounds credible, people tend to trust it more, even if the content itself may not be accurate.</p>
                            </section>
                            <section className="cognitivebias-research-insight">
                                <h3>Truth Bias</h3>
                                <p>Truth bias is the tendency to believe that statements are true, especially when they are presented in a confident and clear manner. People are more likely to accept information that sounds authoritative without questioning its accuracy.</p>
                            </section>
                            <section className="cognitivebias-research-insight">
                                <h3>Dunning-Kruger Effect</h3>
                                <p>The Dunning-Kruger effect occurs when complex or technical language makes people less likely to question information. When something sounds academic or expert-like, people assume it must be correct and don't scrutinize it as carefully.</p>
                            </section>
                        </section>
                    </article>
                    <article className="cognitivebias-brainstorming" id="Brainstorming">
                        <h2>Brainstorming</h2>
                        <p>I worked closely with our software developers as we began brainstorming the screens for the lab's exercise in our weekly team meetings. We considered the user flow and made quick mock-ups of screens on the office's whiteboards.</p>
                        <p>We would prompt users with 3 topics and rank them based on their prior knowledge. We also knew we wanted an interactive AI chatbot tool, in which the user would prompt our mock AI with questions and the AI would respond. Simultaneously, we wanted to give users the option of using a mock wiki on the same topic and compare answers. We would then ask the user to rank their trust after each question and prompt them with the corresponding cognitive biases. By providing a hands-on exercise and reinforcing cognitive biases throughout the lab, we'd hope for the user to remember these biases as they go about using generative AI in their own personal lives.</p>
                        <section className="cognitivebias-brainstorming-images">
                            <img src={cognitiveBiasBrainstorming1} alt="Cognitive Bias Brainstorming 1" />
                            <img src={cognitiveBiasBrainstorming5} alt="Cognitive Bias Brainstorming 5" />
                            <img src={cognitiveBiasBrainstorming2} alt="Cognitive Bias Brainstorming 2" />
                            <img src={cognitiveBiasBrainstorming6} alt="Cognitive Bias Brainstorming 6" />
                        </section>
                    </article>
                    <article className="cognitivebias-development" id="Development">
                        <h2>Development</h2>
                        <p>After cementing our ideas with the stakeholders, I moved to the development phase, where I protoyped the interactive AI chatbot, wiki, pop-ups, and other lab screens in Figma. I made an interface similar to that of other generative AI chatbots and iterated through multiple versions for user input, as it would have been easier to implement if user text inputs were limited. I also made several pop-ups in which the user would rank the influence of the AI's tone and confidence on their trust. In the final part of the exercise, the user would be able to tweak the AI's interface by adding confidence scores, citations, or disclaimers, and I made prototypes of those as well.</p>
                        <section className="cognitivebias-development-images">
                            <img src={cognitiveBiasRanking} alt="Cognitive Bias Ranking Prototype" />
                            <img src={cognitiveBiasAI1} alt="Cognitive Bias AI Prototype 1" />
                            <img src={cognitiveBiasAI2} alt="Cognitive Bias AI Prototype 2" />
                            <img src={cognitiveBiasWiki} alt="Cognitive Bias Wiki Prototype" />
                            <img src={cognitiveBiasPopup} alt="Cognitive Bias Pop-up Prototype" />
                            <img src={cognitiveBiasDisclaimer} alt="Cognitive Bias Disclaimer Prototype" />
                        </section>
                    </article>
                    <article className="cognitivebias-designsystem" id="Design System">
                        <h2>Design System</h2>
                        <p>As I was working on this project, I noticed inconsistencies between ALL's design system and the designs of our recent labs. The design system was outdated, so I spent several weeks creating an updated version of the design system, cross-comparing it with live labs and the code itself. I also made several templates in our team's Figma with this updated system, so it would be easier for me and future ALL UI/UX designers to create prototypes.</p>
                        <section className="cognitivebias-design-system-images">
                            <img src={cognitiveBiasColors} alt="Cognitive Bias Design System Colors" />
                            <img src={cognitiveBiasFonts} alt="Cognitive Bias Design System Fonts" />
                            <img src={cognitiveBiasParagraphs} alt="Cognitive Bias Design System Paragraphs" />
                        </section>
                    </article>
                    <article className="cognitivebias-results" id="Results">
                        <h2>Results</h2>
                        <p>The project is now live! You can view it <a href="https://all.rit.edu/Lab13/">here</a>. Our software developers referenced my prototypes in the development process, and I made sure to maintain proper communication and documentation on the lab's designs!</p>
                        <section className="cognitivebias-results-images">
                            <img src={cognitiveBiasResultsRanking} alt="Cognitive Bias Lab Results - Ranking" />
                            <img src={cognitiveBiasResultsAI} alt="Cognitive Bias Lab Results - AI" />
                        </section>
                    </article>
                    <article className="cognitivebias-takeaways" id="Takeaways">
                        <h2>Takeaways</h2>
                        <p>This project (and working at ALL in general!) taught me a lot about designing with education and accessibility in mind. We wanted the interactive content to be easily accessible, educational, and intuitive, especially given the relevance of our topic and our target audience. In doing all of the research, I was able to strengthen my knowledge in psychology and cognitive biases, too!</p>
                    </article>
                </section>
            </section>
            <Footer />
        </>
    );
}