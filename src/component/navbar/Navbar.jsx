import React, { useState } from 'react'
import './navbar.css'
// import {Link} from 'react-router-dom'

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


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
            <div className="logo-container ">
                <Link  style={{textDecoration:'none', color:'white'}} to='/'>
                <h1 className='navbar-logo'>YMXConvert</h1> 
                </Link>
            </div>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <div className="nav-center">
            <ul className={click ? 'nav-menu active':'nav-menu'}>
           
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink style={{textDecoration:'none', color:'white'}} smooth to='/#about'>
                    About us
                    </HashLink>
                
                </li>
            
    
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink  style={{textDecoration:'none', color:'white'}} smooth to='/#howitwork'>
                    How it works
                    </HashLink>
                </li>
        
         
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink  style={{textDecoration:'none', color:'white'}} smooth to='/#service'>
                    Price chart
                    </HashLink>
                </li>
       
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink  style={{textDecoration:'none', color:'white'}} smooth to='/#service'>
                    Rate calculator
                    </HashLink>
                </li>
            
            
                <li className="nav-item" onClick={closeMobileMenu}>
                <HashLink  style={{textDecoration:'none', color:'white'}} smooth to='/#faq'>
                    Faq
                    </HashLink>
                </li>
            
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
