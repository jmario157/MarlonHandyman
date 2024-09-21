import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Slider from './components/Slider'
import Contact from './components/Contact'
import Princip from './components/Princip'
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <div>
        <Navbar/>
        <Princip/>
        <About/>
        <Slider/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
