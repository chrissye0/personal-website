export default function Project({ title, description, link, image }) {
  return (
    /** project card component */
    <>
      <section className="project">
        <img src={image} alt={title} className="project-image" />

        <section className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </section>

        {/* Overlay link makes entire card clickable */}
        <a
          href={link}
          className="project-link"
          aria-label={`View ${title}`}
        />
      </section>

      {/* <div className="card">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
        <div class="card-trip-infos">
          <div>
            <h2>Title here</h2>
            <p>Short description here!</p>
          </div>
          <h2 class="card-trip-pricing">£99.99</h2>
          <img src="https://kitt.lewagon.com/placeholder/users/dmbf29" class="card-trip-user avatar-bordered" />
        </div>
        <a href="#" class='card-link'></a>
      </div> */}
    </>
  )
}