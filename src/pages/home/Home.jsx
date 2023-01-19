import React from 'react'
import './home.css'
import Banner from '../../component/banner/Banner'
import Benefits from '../../component/benefits/Benefits'
import CryptoExchange from '../../component/cryptoexchange/CryptoExchange'
import Faqs from '../../component/faq/Faqs'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import HowItWork from '../../component/how-it-work/HowItWork'
import PriceChart from '../../component/pricechart/PriceChart'
import RateCalculator from '../../component/ratecalculator/RateCalculator'
import Services from '../../component/services/Services'
import TrackTransaction from '../../component/tracktransaction/TrackTransaction'

const priceChart = <PriceChart/>
const cryptoexchange = <CryptoExchange />
const tracktransaction = <TrackTransaction/>
const ratecalculator = <RateCalculator/>

export const Bank = ()=>(
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
)

export const MobileMoney =()=>(
  <div className="form-container">
  <label>Mobile Money</label>
  <select name="" id="">
      <option value=""> MTN Mobile Money</option>
      <option value=""> Vodafone Cash</option>
      <option value=""> AirtelTigo Money</option>
  </select>
  <input placeholder='Please provide Mobile Money Number' type="text" />
  <input placeholder='Please provide Reference ' type="text" />
  <input placeholder='Provide Email/WhatsApp for Transaction Receipt (Optional)' type="text" />
</div>
)

export const AnswerOne = ()=>(
  <div className="home-question">
    <h4>How Safe is Cediconvert?',</h4>
    <p>Cediconvert is very safe.</p>
    <p>Technical Proof
        Our exchange website comes with an SSL Certificate and all transactions are secured using cryptographic state-of-the-art security processes.
        Social Proof
        We often like people to vouch for us. Ask your friends, the popular crypto communities and look us up on Twitter or Google. The people dont usually lie. 
        Experimental Proof
        We accept as little as $1 worth of coins. We’re pretty sure $1 wont change your financial situation. Use that to test us to see how amazing we are.
      </p>
  </div>
)
const Home = () => {
  return (
    <>
        <Header/>
        <HowItWork/>
        <Services 
        tabs={[
            {name: 'Crypto Exchange', content:cryptoexchange},
            {name: 'Track transaction', content:tracktransaction},
            {name: 'Rate Calculator', content:ratecalculator},
            {name: 'Price Chart', content:priceChart}
        ]}
        />
        <Benefits/>
        <Banner/>
        <Faqs
        tabs={[
          {name:'How Safe is Cediconvert?', content:<AnswerOne/>},
          {name:'What is the Minimum i can Send?', content:<AnswerTwo/>},
          {name:'How Fast will the GHS be Received?', content:<AnswerThree/>},
          {name:'Will Taxes and Transaction Fees affect the GHS to be Received?', content:<AnswerFour/>},
          {name:'I made a mistake, How do i reverse the transaction?', content:<AnswerFive/>},
          {name:'What if i want to Buy Crypto from You', content:<AnswerSix/>},
          {name:'Where Can i Find my Transaction ID?', content:<AnswerSeven/>},
          {name:'Will i get the Transaction Receipt after you make Payment?', content:<AnswerEight/>}
        ]}
        
        />
    </>
  )
}

export default Home

export const AnswerTwo = ()=>(
  <div className="home-question">
    <h4>What is the Minimum i can Send?</h4>
    <p>Technical Proof
       We accept as little as 1 USD. All funds below $1 will be returned back to their owners.
      In some cases, our banking partners may not accept $1. We will contact you on such rare occasions. Mobile Money however accepts all amounts.
    </p>
  </div>
)

export const AnswerThree = ()=>(
  <div className="home-question">
    <h4>How Fast will the GHS be Received?</h4>
    <p>Technical Proof
      Our systems typically take only a few minutes to process payments.
      Delays may be from either the blockchain you decide to use or our Mobile Money and banking partners. Never from us. Some transactions may not work at midnight or after working hours. Any such transactions may be completed in the morning.
    </p>
  </div>
)

export const AnswerFour = ()=>(
  <div className="home-question">
    <h4>Will Taxes and Transaction Fees affect the GHS to be Received?</h4>
    <p>
    Your recipient will receive the exact amount sent after converting USD amount to GHS rate. We incur all taxes and transaction fees.
    However when you are sending crypto to us, your blockchain or exchange provider may deduct a fee from you.
     </p>
  </div>
)

export const AnswerFive = ()=>(
  <div className="home-question">
    <h4>I made a mistake, How do i reverse the transaction?</h4>
    <p>
    We will not be responsible for loss of funds if you make a mistake.
In Crypto you cannot reverse a Transaction after it has been sent.
However if you are able to contact us in time before we make the GHS Fiat Payments we will be able to reach out to our banking or mobile money partners to reverse the transaction.
If you believe you were scammed we will help you lodge a police report at a fee.

      </p>
  </div>
)
export const AnswerSix = ()=>(
  <div className="home-question">
    <h4>What if i want to Buy Crypto from You?</h4>
    <p>
    Please send us an email at otcdesk@cediconvert.com
      </p>
  </div>
)

export const AnswerSeven = ()=>(
  <div className="home-question">
    <h4>What are your Working Hours?</h4>
    <p>
      24/7. We work around the clock and have agents on shift at all times.
      We cant say same for our banking or mobile money partners though. This is because some transactions may not work at midnight or after working hours. Any such transactions may be completed in the morning.
      </p>
  </div>
)

export const AnswerEight = ()=>(
  <div className="home-question">
    <h4>Where Can i Find my Transaction ID?</h4>
    <p>
    Your Transaction ID all its details will be found on the confirmation message pdf doc. The confirmation message pdf doc is autodownloaded once you click on SEND TO GHS.
    Alternatively, you may also copy your Transaction ID and paste in a safe place.
    If you did not receive an autodownload please talk to our customer support.
      </p>
  </div>
)