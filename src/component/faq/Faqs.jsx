import React from 'react'
import './faqs.css'

const Faqs = ({tabs={}}) => {
  const [activeTabIndex,setActiveTabIndex]= React.useState(0)
  
  const [click,setClick]= React.useState(false)

  const activateTab = (index)=>{
      setActiveTabIndex(index)
  }
  return (
    <div className='faqs' id='faq'>
      <div className="web">
          {Object.keys(tabs).length === 0 ?(
            <h4>No tab</h4>
          ):(
            <div className="faqs-wrapper">
              <div className="faqs-wrapper-left">
                {tabs.map((tab,index)=>{
                  return(
                    <div key={index}
                      className={index === activeTabIndex ? 'active-questions' : 'questions'}
                      onClick={()=> activateTab(index)}
                      >
                        {tab.name}
                      <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622540305/Vector_2_api15o.svg" alt="dot-img"/>
                    </div>
                  )
                })}
              </div>
               <div className="faqs-wrapper-right">
                  <div className="">
                      {tabs[activeTabIndex].content}
                  </div>
               </div>
             </div>
          )}
       
      </div>

      
      <div className="mobile">
          {Object.keys(tabs).length === 0 ?(
            <h4>No tab</h4>
          ):(
            <div className="">
             
                {tabs.map((tab,index)=>{
                  return(
                    <div className="faqs-wrapper">
                      <div className="faqs-wrapper-left">
                         <div key={index}
                           className={index === activeTabIndex ? 'active-questions' : 'questions'}
                           onClick={()=> activateTab(index)}
                           >
                             {tab.name}
                           <img src="https://res.cloudinary.com/dypj8zqbm/image/upload/v1622540305/Vector_2_api15o.svg" alt="dot-img"/>
                         </div>
                         </div>

                         {click && (
                            <div className="faqs-wrapper-right">
                                 {tabs[activeTabIndex].content}
                            </div>
                         )}
                     
                    </div>
                  )
                })}
              </div>
      
          )}
       
      </div>
    </div>
  )
}

export default Faqs