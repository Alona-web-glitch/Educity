import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import logo from  '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky,setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
       
       <Link to='hero' smooth={true} offset={0} duration={500}>
         <img src={logo} className='logo' />
       </Link> 

       <div 
  className={`menu-toggle ${menuOpen ? "active" : ""}`} 
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to='programs' smooth={true} offset={-260} duration={500}>PROGRAM</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>ABOUT US</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>CAMPUS</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>TESTIMONIALS</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">CONTACT US</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar