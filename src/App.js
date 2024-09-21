import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Scheduler from './pages/Scheduler';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;