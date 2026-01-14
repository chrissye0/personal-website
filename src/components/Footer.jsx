import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';

export default function Footer() {
  return (
    <footer>
      <section className="footer-left">
        <h1> Thanks for visiting!</h1>
        <h2>Let's chat :)</h2>
      </section>
      <section className="footer-right" >
        <section className="footer-link">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/christine-espeleta/" target="_blank" rel="noopener noreferrer">christine-espeleta</a>
        </section>
        <section className="footer-link">
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:christinee1220@gmail.com" target="_blank" rel="noopener noreferrer">christinee1220@gmail.com</a>
        </section>
        <br />
        <section className="footer-credit">
          <a href="https://github.com/chrissye0/personal-website" target="_blank" rel="noopener noreferrer">made with sweet treats & love</a>
          <p>© Christine Espeleta 2026</p>
        </section>
      </section>
    </footer>
  )
}