import Home from './Home.jsx';
import About from './About.jsx';
import Fun from './Fun.jsx';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
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