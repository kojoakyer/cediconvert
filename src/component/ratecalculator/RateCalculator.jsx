import React from 'react'
import './ratecalculator.css'

const RateCalculator = () => {
  return (
    <div className='rate'>
        <div className="">
            <div className="rate-wrapper">
                <div className="rate-wrapper-form">
                    <div className="form-container">
                        <label>You Have</label>
                       <input type="text" />
                    </div>
                    <div className="form-container">
                        <label>Coin</label>
                        <select name="" id=""></select>
                    </div>
                </div>
                <div className="">
                <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622245247/Group_9621_ubj4sp.svg" alt="conversion-logo" class="convertLogo"/>
                </div>
                <div className="rate-wrapper-form">
                    <div className="form-container">
                        <label>You Get</label>
                       <input type="text" />
                    </div>
                    <div className="form-container">
                        <label>Ghana Cedis</label>
                        <select name="" id=""></select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RateCalculator