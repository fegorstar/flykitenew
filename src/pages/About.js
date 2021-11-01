import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../components/MetaData';
const AboutPage = () => {
    return (
      <Fragment>
    {/*Meta Data */}
    <MetaData title="About" 
description="Flykite Productions possesses expertise in audio-visual productions and content creation, with capacity for producing premium-grade television/radio programmes and commercials for the domestic and international markets." />

          <section className="banner_part section_bg"  > 
        <div className="container" style={{marginTop:"-50px"}}> 
                        <div className="col-lg-12" id="mobilemargin">
                          <h1 className="heading-section mb-5">About Us</h1> 


<p style={{lineHeight:'30px'}}>Flykite Productions, With the quality experience gained over the
years, through the development, production, and management of
multi-dimensional events in Nigeria, Flykite Production has positioned
itself as authority in Strategy, Conceptualization, Tactical
Implementation, Production and Execution of variety of events
particularly brand and sporting events.
<br/><br/>
The objective of Flykite Production is to help companies and individuals
create unique memorable events and activations through creative
planning and professional execution. <br/><br/>
Event Management- enabling companies to grow revenue through
bespoke events, and leveraging various platforms to connect with
target audience and completely creating the satisfactory bond between
the people and the Brand.

</p>
 

</div>
<div className="singlebutt">   
<Link  to='/contact' transition='glide-top'>              
<button className="btn_con danger">CONTACT US</button>
</Link>
                     </div>
                     
                     </div>
      
       
    </section>
                        
                        
      </Fragment>
    )
}

export default AboutPage
