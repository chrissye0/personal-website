import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';

export default function Footer() {
  return (
    <footer>
      <p> Thanks for visiting my website! If you want to reach out, find me on LinkedIn or send over an email! :)</p>
      <section className="footer-links">
        <section className="footer-link">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/christine-espeleta/" target="_blank" rel="noopener noreferrer">christine-espeleta</a>
        </section>
        <section className="footer-link">
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:christinee1220@gmail.com" target="_blank" rel="noopener noreferrer">christinee1220@gmail.com</a>
        </section>
      </section>
    </footer>
  )
}