import React from 'react'
import './tracktransaction.css'

const TrackTransaction = () => {
  return (
    <div className='track'>
        <div className="track-wrapper">
            <div className="track-wrapper-form">
                <div className="form-container">
                    <label>Which coin do you wish to sell?</label>
                    <input placeholder='Enter Transaction Id'/>
                </div>
                <div className="form-container">
                    <button>Track Transaction</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TrackTransaction