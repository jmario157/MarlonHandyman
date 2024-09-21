import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Slider from './components/Slider'
import Contact from './components/Contact'
import Princip from './components/Princip'


function App() {

  return (
    <div>
      <div>
        <Navbar/>
        <Princip/>
        <About/>
        <Slider/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
