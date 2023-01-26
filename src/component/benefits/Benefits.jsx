import React from 'react'
import { Reveal,Fade } from 'react-reveal'
import './benefits.css'

const Benefits = () => {
  return (
    <div className='benefits' id='about'>
        <Reveal effect='fadeInUp'>
        <div className="benetits-wrapper"
           initial="hidden"
           animate="visible"
           exit={{ opacity: 0, transition: { duration: 1 } }}
           variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
            <div className="benefits-wrapper-item">
                <Fade bottom>
                <p>Trusted by over 15,000 customers with their friends</p>
                <h4>Why Trade on YMXConvert?</h4>
                <p>
                Welcome to YMXConvert, the premier online platform for converting cryptocurrencies to Ghana Cedis. We understand that managing your digital assets can be complex and time-consuming. That's why we've created an easy-to-use platform that allows you to instantly convert your cryptocurrencies to Ghana Cedis with just a few simple clicks.
                </p>
                </Fade>
            </div>
            <div className="benefits-wrapper-list">
                <Fade bottom>
                <div className="group">
                    <div className="">
                    <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622458206/Group_z2ux9b.svg" alt="trade-img"/>
                    </div>
                    <h4>No Sign Up Required</h4>
                    <p style={{color:'black'}}>We understand that time is of the essence so we’ve built a tool that lets you skip the registration process and get straight into transacting immediately. .</p>
                </div>
                <div className="group">
                    <div className="">
                    <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622458743/002-coin-stacks_eojbrm.svg" alt="trade-img"/>
                    </div>
                    <h4>Good Rates</h4>
                    <p style={{color:'black'}}> Trade at the best rates in the market and get optimum value for your Crypto down to the last cedi..</p>
                </div>
                <div className="group">
                    <div className="">
                        <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622458821/Group_1_pvoseh.svg" alt="trade-img"/>
                    </div>
                    <h4>All Banks Supported</h4>
                    <p style={{color:'black'}}>We are integrated with all Ghanaian banks and Mobile Money platforms</p>
                </div>
                <div className="group">
                    <div className="">
                      <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622459272/Group_2_bafn2l.svg" alt="trade-img"/>
                    </div>
                    <h4>24/7 Customers Support</h4>
                    <p style={{color:'black'}}>We’re always on hand to ensure that all transaction issues are resolved speedily.</p>
                </div>
                <div className="group">
                    <div className="">
                        <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622459355/surface1_kttsv0.svg" alt="trade-img"/>
                    </div>
                    <h4>Safe & Secure</h4>
                    <p style={{color:'black'}}>All transactions are secured using cryptographic state-of-the-art security processes.</p>
                </div>
                </Fade>
            </div>
        </div>
        </Reveal>
    </div>
  )
}

export default Benefits