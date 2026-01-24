import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Fun from './pages/Fun.jsx';
import FlossBoss from './pages/Projects/FlossBoss.jsx';
import MsgRedesign from './pages/Projects/MsgRedesign.jsx';
import Yearbook from './pages/Projects/Yearbook.jsx';
// import Portfolio from './pages/Projects/Portfolio.jsx';
// import AlumniPages from './pages/Projects/AlumniPages.jsx';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from "react";
import icon from '/icon.svg';
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="nav">
        <div className="nav-left">
          <img src={icon} alt="icon" width="50" height="50" />
        </div>

        <button
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/fun" onClick={() => setMenuOpen(false)}>Fun</NavLink>
          <NavLink reloadDocument target="_blank" to="/ChristineEspeletaResume.pdf">
            Resume
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/floss-boss" element={<FlossBoss />} />
        <Route path="/msg-redesign" element={<MsgRedesign />} />
        <Route path="/yearbook" element={<Yearbook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;