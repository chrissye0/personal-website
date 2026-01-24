import Footer from '../components/Footer.jsx';
import '../styles/App.css';
import '../styles/Fun.css';
import balloonRitchie from "../assets/art/balloonritchie.jpg";
import cannonsAway from "../assets/art/cannons_away.jpg";
import characterLineup from "../assets/art/character_lineup.jpg";
import characters1 from "../assets/art/characters-1.jpg";
import characters2 from "../assets/art/characters-2.jpg";
import meAndMyGuy from "../assets/art/me_and_my_guy.jpg";
import potions from "../assets/art/potions.jpg";
import ratSquare from "../assets/art/rat_square.jpg";
import rat from "../assets/art/rat.jpg";
import ritMap from "../assets/art/rit_map.jpg";
import sunset from "../assets/art/sunset.jpg";

export default function Fun() {
  return (
    <section className="page">
      <section className="fun">
        <h1>Art</h1>
        <section className="art">
          <ul>
            <li key="sunset">
              <img src={sunset} alt="sunset"/>
            </li>
            <li key="cannons away">
              <img src={cannonsAway} alt="cannons away"/>
            </li>
            <li key="potions">
              <img src={potions} alt="potions"/>
            </li>
            <li key="rat">
              <img src={rat} alt="rat"/>
            </li>
            <li key="rat square">
              <img src={ratSquare} alt="rat square"/>
            </li>
            <li key="RIT map">
              <img src={ritMap} alt="RIT map"/>
            </li>
            <li key="character lineup">
              <img src={characterLineup} alt="character lineup"/>
            </li>
            <li key="characters 1">
              <img src={characters1} alt="characters 1"/>
            </li>
            <li key="characters 2">
              <img src={characters2} alt="characters 2"/>
            </li>
            <li key="balloon ritchie">
              <img src={balloonRitchie} alt="balloon ritchie"/>
            </li>
            <li key="me and my guy">
              <img src={meAndMyGuy} alt="me and my guy"/>
            </li>
            <li></li>
          </ul>
        </section>
      </section>
      <Footer />
    </section>
  )
}