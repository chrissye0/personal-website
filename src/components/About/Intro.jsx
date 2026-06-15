import profilePic from '../../assets/profile-pic.jpg';

export default function Intro() {
    return (
        <section className="intro">
            <figure className="profile">
                <img src={profilePic} alt="Profile Picture" />
            </figure>
            <article className="description">
                <h1>Hello!!! :)</h1>
                <p>My name is Christine, but I also go by Chrissy! I am a recent graduate from Rochester Institute of Technology's New Media Interactive Development program with a Web Development minor.</p>
                <p>I am a multidisciplinary designer and developer passionate about UI/UX design, web development, game development, accessibility, and interactive technologies. I've always dreamed of making the media that ignited my passion for art and technology in the first place, but it's a work in progress!</p>
            </article>
        </section>
    )
}