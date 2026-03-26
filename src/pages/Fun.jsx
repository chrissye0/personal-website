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
import erratic from "../assets/art/erratic.gif";
import hedonistChocolates from "../assets/art/hedonistchocolateslogos.png";
import ratsAnimation from "../assets/art/rats&rats.mp4";
import clayAnimation from "../assets/art/Espeleta_Objects.mp4";
import philippinesPoster from "../assets/art/p7.png";
import gameNightPoster from "../assets/art/Game_Night_Poster.png";
import holidayPoster from "../assets/art/Holiday_Poster.png";
import uxSeminarPoster from "../assets/art/UX_Seminar_Poster.png";

export default function Fun() {
  return (
    <section className="page">
      <section className="fun">
        <h1>Art</h1>
        <section className="art">
          <section className="column1">
            <img src={sunset} alt="sunset" />
            <img src={potions} alt="potions" />
            <img src={ratSquare} alt="rat square" />
            <img src={hedonistChocolates} alt="hedonist chocolates" />


          </section>
          <section className="column2">
            <img src={cannonsAway} alt="cannons away" />
            <img src={rat} alt="rat" />
            <img src={ritMap} alt="RIT map" />
            <img src={characterLineup} alt="character lineup" />
            <img src={characters1} alt="characters 1" />
            <img src={characters2} alt="characters 2" />
          </section>
          <section className="column3">
            <img src={balloonRitchie} alt="balloon ritchie" />
            <img src={meAndMyGuy} alt="me and my guy" />
            <img src={erratic} alt="erratic" />
          </section>
        </section>
        <br />
        <h1>Animations</h1>
        <section className="animations">
          <video controls>
            <source src={ratsAnimation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls>
            <source src={clayAnimation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <br />
        <h1>Posters</h1>
        <section className="posters">
          <section className="posters-1">
            <img src={philippinesPoster} alt="Philippines Poster" />
            <img src={gameNightPoster} alt="Game Night Poster" />
          </section>
          <section className="posters-2">
            <img src={holidayPoster} alt="Holiday Poster" />
            <img src={uxSeminarPoster} alt="UX Seminar Poster" />
          </section>
        </section>
      </section>
      <Footer />
    </section>
  )
}