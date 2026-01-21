import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Fun from './pages/Fun.jsx';
import FlossBoss from './pages/Projects/FlossBoss.jsx';
import MsgRedesign from './pages/Projects/MsgRedesign.jsx';
import Yearbook from './pages/Projects/Yearbook.jsx';
// import Portfolio from './pages/Projects/Portfolio.jsx';
// import AlumniPages from './pages/Projects/AlumniPages.jsx';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import icon from '/icon.svg';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <img src={icon} alt="icon" width="50px" height="50px"/>
        <NavLink reloadDocument target="_blank"to="/ChristineEspeletaResume.pdf">Resume</NavLink>
        <NavLink to="/fun">Fun</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/floss-boss" element={<FlossBoss />} />
        <Route path="/msg-redesign" element={<MsgRedesign />} />
        <Route path="/yearbook" element={<Yearbook />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/alumni-pages" element={<AlumniPages />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;