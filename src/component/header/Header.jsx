import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-wrapper">
            <div className="header-wrapper-left">
                <div className="title"> 
                    <h2>Convert your <span><u>Crypto</u></span> to Cedi</h2>
                    <br></br>
                    <h4 className='header-wrapper-left_span'>Easy. Simple. Fast</h4>
                    <p>No Signup Required. No App Download</p>
                </div>

                <div className="header-wrapper-left_center">
                    <button className='header-wrapper-left_btn-left'>Fiat Rate @ GHS11/$</button>
                    <button className='header-wrapper-left_btn-right'>How it works</button>
                </div>

                <div className="header-wrapper-left_bottom">
                    <div className=" header-wrapper-left_bottom_left">Supported : </div>
                    <div className="">
                    <img  src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1629899112/Group_9454_lt6ays.svg" alt="btc"/>
                    <img  src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1629899206/Group_9456_ac8ryb.svg" alt="eth" width="32px" height="32px"></img>
                    <img  src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1629899270/Group_9458_zcopwe.svg" alt="usdt" width="32px" height="32px"></img>
                    <img  src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1633524317/Layer_2_1_edb5ax.svg" alt="usdt" width="32px" height="32px"></img>
                    <img  src="https://res.cloudinary.com/sleemkeen/image/upload/v1667225224/PHOTO-2022-10-25-13-35-15_1.svg" alt="crats" width="32px" height="32px"></img>
                    </div>
                </div>
            </div>
            <div className="header-wrapper-right">
                <div className="header-wrapper-right-img">
                    <img className='header-img' src="assets/header-img.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header