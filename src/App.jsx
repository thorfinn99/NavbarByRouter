import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Contact from './components/Pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
