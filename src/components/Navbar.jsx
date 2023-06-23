import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'  
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'
import eltaLogo from '../assets/eltaLogo.svg'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    
    <div className="navbar" id={expandNavbar ? "open" : "closed"}>
      <div className='navbar-items'>
        <img src={eltaLogo} alt='elta Logo' className='logo'/> 
        <div className="links">        
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
        </div> 
      </div>     
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar(prevNavbar => !prevNavbar)
          }}
        >
          <ReorderIcon />
        </button>
      </div>    
    </div>
  )
}

export default Navbar