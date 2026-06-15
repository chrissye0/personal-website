import Job from './Job.jsx';

export default function Experience() {
    return (
        <>
            <header className="experience-header"><h2>Experience</h2></header>
            <section className="experience">
                <Job
                    key="MSG Freelance"
                    company="Madison Square Garden"
                    title="Freelance Digital Product Designer"
                    duration="Sept 2025 - Current"
                    details={[
                        <>
                            Designing <b>responsive prototypes</b> and <b>reusable components</b> across <b>desktop and mobile</b> for MSG.com, the New York
                            Knicks, and the New York Rangers in <b>Figma</b> and <b>Ceros</b> with the Digital Experience, Engineering, and Marketing teams.
                        </>
                    ]} />
                <Job
                    key="ALL"
                    company="Accesible Learning Labs"
                    title="UI/UX Designer"
                    duration="Sept 2025 - May 2026"
                    details={[
                        <>
                            Led UX design for NSF-funded accessibility and STEM education labs and redesigned <b>design systems</b> in <b>Figma</b> using <b>WCAG</b> standards, <b>reusable UI patterns</b>, and <b>AI-assisted prototyping</b> with <b>Figma Make</b> and <b>Claude</b>.
                        </>,
                        <>
                            Delivered interactive accessibility-focused lab experiences to <b>30,000+</b> students and exhibition attendees.
                        </>
                    ]} />
                <Job
                    key="MSG Student Associate"
                    company="Madison Square Garden"
                    title="Digital Product Design Student Associate"
                    duration="May 2024 - Aug 2024"
                    details={[
                        <>Increased MSG.com homepage user preference ratings to <b>87.5%</b> through <b>high-fidelity Figma prototype iteration</b>, <b>usability testing</b>, and <b>interaction design</b> improvements.</>,
                        <>Conducted <b>40+ user research studies</b> in <b>UserTesting</b> to evaluate <b>engagement</b>, <b>navigation patterns</b>, <b>NPS</b>, and <b>search engine optimization</b>, presenting <b>competitive analysis</b> and <b>A/B testing</b> findings to the Digital Experience team.</>
                    ]} />
                <Job
                    key="RIT TA"
                    company="Rochester Institute of Technology"
                    title="Teaching Assistant"
                    duration="Aug 2023 - May 2026"
                    details={[
                        <>Assisted <b>100+ students</b> with <b>JavaScript</b> in <b>p5.js</b> and provided <b>constructive feedback</b> on <b>creative coding</b> projects.</>
                    ]} />
                <Job
                    key="Amazon"
                    company="Amazon"
                    title="Campaign & Creative Management Youth Apprentice"
                    duration="Sept 2020 - June 2022"
                    details={[
                        <>Developed wiki and e-commerce websites for the Grocery and Streaming TV teams while conducting <b>10+ stakeholder interviews</b> to gather user needs, synthesize business requirements, and inform design decisions.</>,
                        <>Reviewed and consolidated <b>user insights</b>, <b>stakeholder goals</b>, and <b>analytics</b> to support <b>advertising campaign strategy</b> and <b>cross-functional decision-making</b>.</>
                    ]} />
            </section>
        </>
    )
}