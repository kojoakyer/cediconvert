import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-wrapper">
            <div className="banner-wrapper-top">
                
                    <h3>
                    Enjoy VIP Personalised Rate for Crypto of $10,000 and above
                    </h3>
            
                <button style={{backgroundColor:'white',color:'black',padding:'10px 30px',fontSize:'1rem',border:'none'}}>Sell at VIP Rate</button>
            </div>
            <div className="banner-wrapper-bottom">
                <div className="">
                <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622471426/Rectangle_2213_v60x2p.png" alt="bitcoin" width="343px" class="bitcoin-img"/>
                </div>
                <div className="banner-wrapper-bottom-right">
                    <h4>Earn with YMXConvert</h4>
                    <h5>Comming Soon</h5>
                    <button>Loading ...</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner