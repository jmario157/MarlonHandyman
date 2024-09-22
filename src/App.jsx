import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Slider from './components/Slider'
import Contact from './components/Contact'
import Princip from './components/Princip'
import Footer from './components/Footer'
import Maps from './components/Maps'


function App() {

  return (
    <div>
      <div>
        <Navbar/>
        <Princip/>
        <About/>
        <Slider/>
        <Maps/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
