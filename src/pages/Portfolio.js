
import React,{ Fragment } from 'react'
import Portfolios from '../components/portfolio/Portfolios'
const PortfolioPage = () => {
    return (
        <Fragment>
       <section className="banner_part section_bg">
        <div className="container">
                        <div className="col-lg-12" id="mobilemargin">
                          <h1 className="heading-section mb-5">Our Portfolio</h1>
                          <div className=""> 
                           <Portfolios/>
                           </div>
                     </div>
          
        </div>
    </section>
    </Fragment>     
    )
}

export default PortfolioPage
