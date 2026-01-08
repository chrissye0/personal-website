export default function Project({ title, description, link }) {
  return (
    <a href={link}>
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    </a>
  )
}