export default function Job({ company, title, duration, details }) {
    return (
        <section className="job">
            <section className="job-details">
                <h2>{company}</h2>
                <b>{title}</b>
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