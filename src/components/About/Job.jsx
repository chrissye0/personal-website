export default function Job({ company, title, duration, details }) {
    return (
        <section className="job">
            <section className="job-details">
                <h3>{company}</h3>
                <p>{title}</p>
                <p>{duration}</p>
            </section>
            <ul>
                {details.map((detail) => {
                    return <li>{detail}</li>;
                })}
            </ul>
        </section>
    )
}