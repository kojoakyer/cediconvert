import React from 'react'
import './services.css'
const Services = ({tabs={}}) => {
    const [activeTabIndex,setActiveTabIndex]= React.useState(0)

    const activateTab = (index)=>{
        setActiveTabIndex(index)
    }
  return (
    <div>
        <div className="services">
            <div className="">
                <div className="services-title"><h2>CediConvert Services</h2></div>
                <div className="services-wrapper">
                    {Object.keys(tabs).length === 0 ? (
                    <div className="">No Tabs</div>
                    ): (
                    <div className="">
                        <div className="services-wrapper-tab">
                            {tabs.map((tab, index)=>{
                                return(
                                <label key={index}
                                className={index === activeTabIndex ? 'active-tab' : 'tab'}
                                onClick={()=> activateTab(index)}
                                >{tab.name}</label>
                            )})}
                        </div>
                        <div className="services-wrapper-content">
                            <div className="">
                                {tabs[activeTabIndex].content}
                            </div>
                        </div>
                    </div>
                   ) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services