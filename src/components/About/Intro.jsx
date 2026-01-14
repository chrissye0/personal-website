import profilePic from '../../assets/profile-pic.jpg';

export default function Intro() {
    return (
        <section className="intro">
            <figure className="profile">
                <img src={profilePic} alt="Profile Picture" />
            </figure>
            <article className="description">
                <h1>Hello!!! :)</h1>
                <p>My name is Christine (but I also go by Chrissy)! I am a 4th year student at the Rochester Institute of Technology studying New Media Interactive Development with a minor in Web Development. I will be graduating in May 2026.</p>
                <p>I am passionate about UI/UX design, user research, digital art, web development, and interactive technologies.</p>
                <p>I dream of one day making the digital media that ignited my passions for art and tech in the first place, but until then, it's a work in progress!</p>
            </article>
        </section>
    )
}