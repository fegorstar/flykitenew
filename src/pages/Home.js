import React from 'react'
import { Fragment } from 'react'
import Features from '../components/home/Features'
import { Link } from 'react-router-dom'
import MetaData from '../components/MetaData';
const HomePage = () => {
    return (
        <Fragment>

    {/*Meta Data */}
      <MetaData 
      title="Flykite Productions possesses expertise in audio-visual productions and content creation, with capacity for producing premium-grade television/radio programmes and commercials for the domestic and international markets." 
      description="Flykite Productions possesses expertise in audio-visual productions and content creation, with capacity for producing premium-grade television/radio programmes and commercials for the domestic and international markets." 
       />

    <section className="banner_part section_bg">
        <div className="container" >
                        <div className="col-lg-12" id="mobilemargin" style={{marginTop:"100px"}}>
                          <h1 className="heading-section">Events <br className="rwd-break"/>Promotion</h1>
                          <Features/>
                         
                          <div className="watchnowbutt">                 
                          <Link to='/GOtvBoxingNight'   transition='glide-top'>
 <button className="watchbtn_con hvr-icon-wobble-vertical">Watch Flykite Highlights <i className="fas fa-paper-plane hvr-icon"></i> </button></Link>      
                     </div>
            </div>
        </div>
    </section>

          </Fragment>
          
    )
}

export default HomePage
