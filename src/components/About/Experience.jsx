import Job from './Job.jsx';

export default function Experience() {
    return (
        <>
            <header className="experience-header"><h2>Experience</h2></header>
            <section className="experience">
                <Job
                    key="MSG Freelance"
                    company="Madison Square Garden"
                    title="Freelance UI/UX Designer"
                    duration="Sept 2025 - Current"
                    details={[
                        <>
                            Designing interactive and responsive web pages in <b>Figma</b> and <b>Ceros</b> for the New York Knicks, New York Rangers, and MSG.com in collaboration with the Digital Experience, Software Development, and Marketing teams.
                        </>
                    ]} />
                <Job
                    key="ALL"
                    company="Accesible Learning Labs"
                    title="UI/UX Designer"
                    duration="Sept 2025 - Current"
                    details={[<>
                        Spearheading the design process in <b>Figma</b> of NSF-funded labs
                        fostering <b>accessibility</b> and <b>STEM education</b> with software
                        developers and product managers.
                    </>]} />
                <Job
                    key="MSG Student Associate"
                    company="Madison Square Garden"
                    title="Digital Product Design Student Associate"
                    duration="May 2024 - Aug 2024"
                    details={[
                        <>Iterated through <b>high-fidelity prototypes</b> of the Madison Square Garden homepage and New York Knicks web pages in <b>Figma</b> to boost <b>interactivity</b>, <b>SEO</b>, and the <b>user experience.</b></>,
                        <>Executed 40+ user research tests on MSG platforms in UserTesting and presented findings on NPS, competitive analysis, A/B testing, and accessibility to the Digital Experience team.</>
                    ]} />
                <Job
                    key="RIT TA"
                    company="Rochester Institute of Technology"
                    title="Teaching Assistant"
                    duration="Aug 2023 - Current"
                    details={[
                        <>Assisting 30+ students with <b>JavaScript</b> in <b>p5.js</b> and providing <b>constructive feedback</b> on <b>creative coding</b> projects.</>
                    ]} />
                <Job
                    key="Amazon"
                    company="Amazon"
                    title="Campaign & Creative Management Youth Apprentice"
                    duration="Sept 2020 - June 2022"
                    details={[
                        <>Developed internal websites and an online store in <b>HTML</b> and <b>CSS</b> for Amazon's Grocery and Streaming TV teams.</>,
                        <>Reviewed and consolidated <b>user insights</b>, <b>stakeholder goals</b>, and <b>analytics</b> for advertising campaigns.</>
                    ]} />
            </section>
        </>
    )
}