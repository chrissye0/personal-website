import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Fun from './pages/Fun.jsx';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink reloadDocument target="_blank"to="/ChristineEspeletaResume.pdf">Resume</NavLink>
          <NavLink to="/fun">Fun</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fun" element={<Fun />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;