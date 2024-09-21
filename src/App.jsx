import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Slider from './components/Slider'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <div>
        <Navbar/>
        <About/>
        <Slider/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
