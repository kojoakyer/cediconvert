import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {

    const user= false;

    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }




  return (
    <>
    <div className="navbar">
        <div className="nav-left">
            <div className="logo-container "><h1 className='navbar-logo'>Cediconvert</h1> </div>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <div className="nav-center">
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className="nav-item" onClick={closeMobileMenu}>
                    About us
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    How it works
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    Price Chart
                </li>
                <li className="nav-item" onClick={closeMobileMenu}>
                    Rate Calculator
                </li>
                <li className="nav-item l" onClick={closeMobileMenu}>
                    Faq
                </li>
                <li className="nav-item mobile" onClick={closeMobileMenu}>
                    Logout
                </li>
                <li className='nav-item mobile' onClick={closeMobileMenu}>Login</li>
                <li className='nav-item mobile' onClick={closeMobileMenu}>Register</li>

            </ul>
        </div>
        <div className="nav-right">
           <ul className='nav-menu'>

                <li className='nav-item '>
                    <button style={{padding:'10px 20px', borderRadius:'20px', opacity:'0.7',fontWeight:'700'}}>Sign In</button>
                </li>
                <li className='nav-item'>
                <button style={{padding:'10px 20px', borderRadius:'20px', opacity:'0.7',fontWeight:'700'}}>Fiat Rate @ GHS11/$ </button>
                </li>
            </ul>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
