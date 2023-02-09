import React, { useEffect, useState } from 'react'
import './ratecalculator.css'
import axios from 'axios'


const RateCalculator = () => {
    const api_key = 112

    const [initialState, setState] = useState({
        currencies:['BTC','ETH','USDT_TRC20','BNB_BSC'],
        base: 'BTC',
        amount:'',
        convertTo:'',
        result:'',
        date:''
    });

    const {currencies,base,amount,convertTo,result,date} = initialState

    var nowdate = new Date();
    var timestamp = nowdate.getTime(); 

    const query_string = `timestamp=${timestamp}`;
    const apiSecret = api_key;

        const signature = 'crypto'
        .createHmac('sha256', apiSecret)
        .update(query_string)
        .digest('hex')

    useEffect(()=>{
        if(amount === isNaN){
            return;
        }else{
            const getConcurrencyCover = async () =>{
                 const response = await axios.get(`https://api.binance.com/api/v3/order?symbol=${base}&recvWindow=5000&timestamp=${timestamp}&signature=${signature}`)
                //  const result = (response.data.rates[convertTo] * amount).toFixed(3)

                console.log(response);

            }

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