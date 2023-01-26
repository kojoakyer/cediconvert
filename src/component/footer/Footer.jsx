import React from 'react'
import { Link } from 'react-router-dom'
import  './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-wrapper-left">
                <div className="logo-container "><h1 className='navbar-logo'>YMXconvert</h1> </div>
                <p>@ Copyright YMXConvert 2023</p> 
            </div>
            <div className="footer-wrapper-right">
                <div className="footer-wrapper-right-co">
                    <ul>
                        <h3>Company</h3>
                        <li>About Us</li>
                        <li>Sell Bitcoin</li>
                        <li>Track Transaction</li>
                        <li>Price Chart</li>
                        <li>Rate Calculator</li>
                    </ul>
                </div>
                <div className="footer-wrapper-right-le">
                    <ul>
                        <h3>Legal</h3>
                        <Link to='/terms' style={{textDecoration:'none',color:'white'}}> <li>Terms and Conditions</li></Link>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer