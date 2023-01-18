import React from 'react'
import './cryptoexchange.css'

const CryptoExchange = () => {
  return (
    <div className='cypto'>
        <div className="crypto-wrapper">
            <div className="crypto-wrapper-form">
            <div className="form-container">
                <label>Which coin do you wish to sell?</label>
                <select name="" id=""></select>
            </div>
            <div className="form-container">
                <label>Coin Network</label>
                <select name="" id=""></select>
            </div>
            <div className="form-container">
                <label>Bank Account</label>
                <select name="" id="">
                    <option value="">Absa Bank Ghana Limited</option>
                    <option value="">Access Bank Ghana Plc</option>
                    <option value="">Agricultural Development Bank of Ghana</option>
                    <option value="">Bank of Africa Ghana Limited</option>
                    <option value="">CalBank Limited</option>
                    <option value="">Ecobank (Ghana) Limited</option>
                    <option value="">FBN Bank Ghana Limited</option>
                    <option value="">First Atlantic Bank Limited</option>
                    <option value="">First National Bank Ghana</option>
                    <option value="">GCB Bank Limited</option>
                    <option value="">Guaranty Trust Bank Ghana Limited</option>
                    <option value="">National Investment Bank Limited</option>
                    <option value="">OmniBSIC Bank Ghana Limited</option>
                    <option value="">Prudential Bank</option>
                    <option value="">Republic Bank Ghana Limited</option>
                    <option value="">Société Générale Ghana Limited</option>
                    <option value="">Stanbic Bank Ghana Limited</option>
                </select>
            </div>
            <div className="form-container">
                <label>Account Number</label>
                <input type="text" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default CryptoExchange