export default function Project({ title, description, tags, link, image }) {
  return (
    /** project card component */
    <>
      <section className="project">
        <img src={image} alt={title} className="project-image" />
        <section className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <section className="project-tags">
          {tags.map((tag) => {
            return <button className="project-skill">{tag}</button>
          })}
          </section>
        </section>

        {/* Overlay link makes entire card clickable */}
        <a
          href={link}
          className="project-link"
          aria-label={`View ${title}`}
        />
      </section>
    </>
  )
}