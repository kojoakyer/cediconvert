import React, { useState } from 'react'
import './cryptoexchange.css'
import axios from 'axios'

const CryptoExchange = () => {
    const [showhide,setShowHide]=React.useState('')

    const [paymentDetails, setPaymentDetails] = useState('')
    const [sellingCoin, setSellingCoin] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [amounttosend, setAmountToSend] = useState('')
    const [mobileMoney, setMobileMoney] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [mobileReference, setMobileReference] = useState('')

    const [laoding, setLoading] = useState(false)

    const handlesShowHide=(event)=>{
        const getUser = event.target.value
        console.log(getUser);
        setShowHide(getUser)
    }

    // const formData = new FormData();
    // formData.append("paymentDetails", paymentDetails);
    // formData.append("walletDetails", walletDetails);
    // formData.append("bankAccount", bankName);
    // formData.append("accountNumber", accountNumber);
    // formData.append("amounttosend", amounttosend);
    // formData.append("mobileMoney", mobileMoney);
    // formData.append("mobileNumber", mobileNumber);
    // formData.append("mobileReference", mobileReference);

    async function handleSubmit(e){
        e.preventDefault()

        setLoading(true)

        const newtransaction ={
            paymentDetails,sellingCoin,bankName,accountNumber,amounttosend,mobileMoney,mobileNumber,mobileReference
        }
       
        try {
        
         await axios.post("http://localhost:5000/api/transactions", newtransaction)

        }catch(err){
            console.log(err)
        }

        setLoading(false)
    }

  return (
    <div className='cypto'>
        <div className="crypto-wrapper">
        <form className="crypto-wrapper-form" onSubmit={handleSubmit}>
            <div className="form-container">
                <label>Provide GHS Payment Details</label>
                <select name="" id="" onChange={(e)=>(handlesShowHide(e))}>
                    <option defaultValue disabled>
                        Select Payment Details
                    </option>
                    <option value="mobilemoney">Mobile Money</option>
                    <option value="bank">Bank</option>
                    <option value="cash">Cash (Coming Soon)</option>
                </select>
            </div>
            {showhide == 'mobilemoney' && (
                        <div className="form-container">
                            <label>Mobile Money</label>
                            <select name="" id="" onChange={(e)=>setMobileMoney(e.target.value)}>
                                <option defaultValue disabled>
                                    Select Mobile Money
                                </option>
                                <option value="Mtn"> MTN Mobile Money</option>
                                <option value="Vodafone"> Vodafone Cash</option>
                                <option value="AirtelTigo"> AirtelTigo Money</option>
                            </select>
                            <input onChange={(e)=> setMobileNumber(e.target.value)} placeholder='Please provide Mobile Money Number' type="text" />
                            <input onChange={(e)=> setMobileReference(e.target.value)} placeholder='Please provide Reference ' type="text" />
                        </div>
            )}

            {showhide == 'bank' && (
                <div className="" style={{marginRight:'20px'}}>
                     <div className="form-container">
                        <label>Bank Account</label>
                        <select name="" id="" onChange={(e)=>setBankName(e.target.value)}>
                            <option defaultValue disabled>
                                Select Bank
                            </option>
                            <option value="Absa Bank Ghana Limited">Absa Bank Ghana Limited</option>
                            <option value="Access Bank Ghana Plc">Access Bank Ghana Plc</option>
                            <option value="Agricultural Development Bank of Ghana">Agricultural Development Bank of Ghana</option>
                            <option value="Bank of Africa Ghana Limited">Bank of Africa Ghana Limited</option>
                            <option value="CalBank Limited">CalBank Limited</option>
                            <option value="Ecobank (Ghana) Limited">Ecobank (Ghana) Limited</option>
                            <option value="FBN Bank Ghana Limited">FBN Bank Ghana Limited</option>
                            <option value="First Atlantic Bank Limited">First Atlantic Bank Limited</option>
                            <option value="First National Bank Ghana">First National Bank Ghana</option>
                            <option value="GCB Bank Limited">GCB Bank Limited</option>
                            <option value="Guaranty Trust Bank Ghana Limited">Guaranty Trust Bank Ghana Limited</option>
                            <option value="National Investment Bank Limited">National Investment Bank Limited</option>
                            <option value="OmniBSIC Bank Ghana Limited">OmniBSIC Bank Ghana Limited</option>
                            <option value="Prudential Bank">Prudential Bank</option>
                            <option value="Republic Bank Ghana Limited">Republic Bank Ghana Limited</option>
                            <option value="Société Générale Ghana Limited">Société Générale Ghana Limited</option>
                            <option value="Stanbic Bank Ghana Limited">Stanbic Bank Ghana Limited</option>
                        </select>
                    </div>
                    <div className="form-container">
                        <label>Account Number</label>
                        <input onChange={(e)=>setAccountNumber(e.target.value)} type="text" />
                    </div>
                </div>
                )}

                <div className="form-container">
                    <label>Provide Coin/Wallet Details</label>
                    <select name="" id="" onChange={(e)=>setSellingCoin(e.target.value)}>
                        <option defaultValue disabled>
                            Select Coin Details
                        </option>
                        <option value="USDT"> USDT</option>
                        <option value="BUSD">BUSD</option>
                        <option value="USDC"> USDC</option>
                    </select>
                    <select name="" id="">
                        <option value=""> Binance Smart Chain (BSC-BEP20)</option>
                    </select>
                    <input onChange={(e)=>setAmountToSend(e.target.value)} placeholder='Please provide Amount to be Sent in USD' type="text" />
                </div>
                
                    <button disabled={laoding} className='ser-btn' type='submit'>
                        Send
                    </button>
        
            </form>
        </div>
    </div>
  )
}

export default CryptoExchange