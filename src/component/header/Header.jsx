import { motion} from 'framer-motion'
import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-wrapper">
            <div className="header-wrapper-left">
                <div className="title"> 
                    <h2>Simple, reliable and secure <span><u>crypto</u></span> to cedi conversion globally </h2>
                    <br></br>
                    <h4 className='header-wrapper-left_span'>Trust us to handle your transactions with ease and privacy.</h4>
                    <p style={{marginTop:'-20px'}}>No Signup Required. No App Download. No Fees</p>
                </div>

                <div className="header-wrapper-left_center">
                    <button className='header-wrapper-left_btn-left'>Fiat Rate @ GHS11/$</button>
                    <button className='header-wrapper-left_btn-right'>How it works</button>
                </div>

                <div className="header-wrapper-left_bottom">
                    <div className=" header-wrapper-left_bottom_left">Supported : </div>
                    <div className="" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <img style={{width:'30px', height:'30px',marginLeft:'20px'}} src="assets/busd.svg" alt="" />
                        <img style={{width:'30px', height:'30px',marginLeft:'20px'}} src="assets/usdt.svg" alt="" />
                        <img style={{width:'40px', height:'40px',marginLeft:'20px'}} src="assets/usdc.svg" alt="" />
                        
                    </div>
                </div>
                <div className="header-wrapper-left_bot">
                    <div className=" header-wrapper-left_bottom_left">Comming soon : </div>
                    <div className="" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <img style={{width:'30px', height:'30px',marginLeft:'20px'}} src="assets/btc.png" alt="" />
                    <img style={{width:'30px', height:'30px',marginLeft:'20px'}} src="assets/eth.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="header-wrapper-right">
                <div className="header-wrapper-right-img">
                    <motion.img animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                    transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }} className='header-img' src="assets/header-img.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header