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
          <section className="column1">
            <img src={sunset} alt="sunset"/>
            <img src={potions} alt="potions"/>
            <img src={ratSquare} alt="rat square"/>
            <img src={characterLineup} alt="character lineup"/>
            <img src={characters2} alt="characters 2"/>
            <img src={meAndMyGuy} alt="me and my guy"/>
          </section>
          <section className="column2">
            <img src={cannonsAway} alt="cannons away"/>
            <img src={rat} alt="rat"/>
            <img src={ritMap} alt="RIT map"/>
            <img src={characters1} alt="characters 1"/>
            <img src={balloonRitchie} alt="balloon ritchie"/>
          </section>
        </section>
      </section>
      <Footer />
    </section>
  )
}