import React, { useEffect, useState } from 'react'
import './ratecalculator.css'
import axios from 'axios'

const RateCalculator = () => {

    const [initialState, setState] = useState({
        currencies:['BTC','ETH','USDT_TRC20','BNB_BSC'],
        base: 'BTC',
        amount:'',
        convertTo:'',
        result:'',
        date:''
    });

    const {currencies,base,amount,convertTo,result,date} = initialState

    useEffect(()=>{
        if(amount === isNaN){
            return;
        }else{
            const getConcurrencyCover = async () =>{
                // const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base=${base}`,{
                //     headers: ({'apikey':'69d8IPfJ9Dq3FaOv5NAfAAeAAHPV0xK7'})
                // });
              
                // console.log('responses =>', response);
                // const responses = response.data.date
                // const result = (response.data.rates[convertTo] * amount).toFixed(3)

                var myHeaders = new Headers();
myHeaders.append("apikey", "69d8IPfJ9Dq3FaOv5NAfAAeAAHPV0xK7");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base=${base}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
            };

            getConcurrencyCover()
        }
    },[amount,base,convertTo])

    const onChangeInput =(e)=>{
        setState({
            ...initialState,
            amount: e.target.value,
            result:null,
            date:null
        })
    }
    const handleSelect=(e)=>{
        setState({
            ...initialState,[e.target.name]:e.target.value,result:null
        })
    }
  return (
    <div className='rate'>
        <div className="">
            <div className="rate-wrapper">
                <div className="rate-wrapper-form">
                    <div className="form-container">
                        <label>You Have</label>
                       <input type="number" value={amount} onChange={onChangeInput} />
                    </div>
                    <div className="form-container">
                        <label>Coin</label>
                        <select name="" id="" value={base} onChange={handleSelect}>
                            {currencies.map((currency,index)=>(
                                <option value={currency} key={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="">
                <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622245247/Group_9621_ubj4sp.svg" alt="conversion-logo" class="convertLogo"/>
                </div>
                <div className="rate-wrapper-form">
                    <div className="form-container">
                        <label>You Get</label>
                       <input disabled={true} type="text" value={amount === '' ? '0' : result === null ? 'Calculating...' : result}/>
                    </div>
                    <div className="form-container">
                        <label>Ghana Cedis</label>
                        <select disabled={true} name="" id="" value={convertTo} onChange={handleSelect}>
                            <option>GHA</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RateCalculator