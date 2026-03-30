import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import About from './Components/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Programs/>
        <About/>
        <Campus/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
