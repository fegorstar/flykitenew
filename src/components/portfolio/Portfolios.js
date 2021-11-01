import React from 'react'
import { Fragment } from 'react'
import PortfolioDetails from '../portfolio/PortfolioDetails';


const Portfolios = () => {

    return (
       <Fragment>
<div className="section-top-border">
				<div className="row">
          <div className="col-md-4">
          <section className="portfolio_part" pd-popup-open="popupNew">
      <div className="single_portfolio_text">
                        <img src="assets/img/sports/cat-1.png" alt="#"/>
                        <div className="porthover_text">
                        <h3>GOTV Boxing Night</h3>
                        <span className="cat">Biggest Boxing Show in Africa</span>
            </div>
        </div>
    </section>
					</div>
          
					<div className="col-md-4">				 
    <section className="portfolio_part" pd-popup-open="popupNew2">
      <div className="single_portfolio_text">
                        <img src="assets/img/sports/cat-2.png" alt="#"/>
                        <div className="porthover_text">
                        <h3>DStv Premium</h3>
                        <span className="cat">Golf Day</span>
            </div>
        </div>
    </section>
					</div>
			

          <div className="col-md-4">
					 
          <section className="portfolio_part"  pd-popup-open="popupNew3">
      <div className="single_portfolio_text">
                        <img src="assets/img/sports/cat-3.png" alt="#"/>
                        <div className="porthover_text">
                        <h3>GOtv Boxing <br/> NextGen Search</h3>
                        <span className="cat"></span>
            </div>
        </div>
    </section> 
                 </div>
				</div>
			</div>

{/*modal import */}
<PortfolioDetails/>

     </Fragment>
    )
}

export default Portfolios
