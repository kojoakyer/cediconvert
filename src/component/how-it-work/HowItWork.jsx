import React from 'react'
import './howitwork.css'

import { motion } from 'framer-motion'
import {Fade} from 'react-reveal'

const HowItWork = () => {
  return (
    <div className='howitwork' id='howitwork'>
        <div className="">
            <div className="howitwork-wrapper">
                <div className="howitwork-wrapper-title">
                    <h2>How It Works</h2>
                </div>
                <div className="howitwork-wrapper-item">
                    <div className="how-title">
                        <h3>1.Under YMXConvert Service, Provide GHS Payment Details.</h3>
                        <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622131853/Vector_12_2_gtlefk.png" alt="line-connector" class="firstLineConnector d-none d-lg-block" width="392px"/>
                    </div>
                    <div className="">
                        <Fade right>
                    <img
                    src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1626866176/Mask_Group_1_1_hlhdmk.png" alt="phone-advert" width="434px" />
                    </Fade>
                    </div>
                </div>
                <div className="howitwork-wrapper-item">
                    <div className="">
                    <Fade left>
                    <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1626866226/Mask_Group_2_1_ra9wn1.png" alt="phone-advert" width="434px"/>
                    </Fade>
                    </div>
                    <div className="how-title">
                        <h3>2. Provide Coin/Wallet Details.</h3>
                        <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622738832/Vector_13_2_eh288f.png" alt="line-connector" class="mSecondLineConnector" width="300px"></img>
                </div>
                    </div>
                <div className="howitwork-wrapper-item">
                    <div className="how-title">
                        <h3>3. Send Crypto to receive GHS</h3>
                    </div>
                    <div className="">
                    <Fade>
                    <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1626884359/Mask_Group_3_1_rt9e5a.png" alt="phone-banner" width="434px" class="thirdPhoneBanner d-none d-lg-block"/>
                    </Fade>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWork