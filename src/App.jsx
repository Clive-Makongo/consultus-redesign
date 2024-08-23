import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './container/Home';
import AboutUs from './container/AboutUs';
import ContactUs from './container/ContactUs';
import Goals from './container/Goals';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App
