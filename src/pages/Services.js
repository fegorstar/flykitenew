import React from 'react'
import { Fragment } from 'react'
import MetaData from '../components/MetaData';
import Accordion from '../components/service/Accordion';


const ServicesPage = () => {
    return (
        <Fragment> 
   {/*Meta Data */}
   <MetaData title="Services" 
description="Flykite Productions possesses expertise in audio-visual productions and content creation, with capacity for producing premium-grade television/radio programmes and commercials for the domestic and international markets." />

          <section className="banner_part section_bg">
        <div className="container">
                        <div className="col-lg-12" id="mobilemargin" > 
                         <h1  className="heading-section mb-5">Our Services</h1>
                      
                    <Accordion/>
                        
                    </div>
                    
                 
                     </div>
          
        
    </section>
                        
                        
      </Fragment>
         
    )
}

export default ServicesPage
