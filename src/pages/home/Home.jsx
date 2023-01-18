import React from 'react'
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
const cryptoexchange = <CryptoExchange/>
const tracktransaction = <TrackTransaction/>
const ratecalculator = <RateCalculator/>
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
        <Faqs/>
    </>
  )
}

export default Home