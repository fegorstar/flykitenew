import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
const PortfolioDetails = () => {
    return (
       <Fragment>

           {/*GOtv Boxing Night */}
      <div className="popup" pd-popup="popupNew">
          <div className="popup-inner">
<div className="modalcontainer">
  <img className="modalcontainer__image" src="assets/img/portfolio/v131_1.png" alt=""/>
  <div className="modalcontainer__text">
  <h2 >GOtv Boxing Night</h2>
    <p>
    GOtv Boxing Night debuted in November 2014 as an initiative 
    to revive Nigerian boxing, which had slipped into near-irrelevance over two decades. 
    It has since grown to become the 
    biggest ever professional boxing event in the history of the sport in Nigeria.
    <br/><br/>
    GOtv Boxing Night combines Las Vegas-style entertainment with sport, making it the only sporting event that attracts 
    bigger crowds than 90% of domestic league matches.

<br/><br/>
GOtv Boxing Night has delivered the biggest pay-out to a boxer fighting locally, when the sum of N3m in addition to his fighter’s purse, was won by Rilwan ‘REAL ONE’ 
Oladosu in December 2018 at the 17th edition of the boxing show.

 <br/><br/>
 In the last 22 editions, GOtv Boxing Night has featured boxers 
 from African countries including Ghana, Republic of Benin, Tanzania, Burkina Faso, Egypt, 
 Uganda and the South American country of Argentina
<br/><br/>

The boxing show, which is broadcast live in 47 African countries, has produced National, West African, African, 
Commonwealth and Intercontinental champions.
  <br/><br/>

 
        </p>
         </div>
         <Link to='' className="popup-close" pd-popup-close="popupNew"></Link>
            
</div>

          </div>
      </div>

      {/*DStv Premium Golf Day */}
            
      <div className="popup" pd-popup="popupNew2" id="#myModal">
          <div className="popup-inner">
<div className="modalcontainer">
  <img className="modalcontainer__image" src="assets/img/portfolio/v131_1.png" alt=""/>
  <div className="modalcontainer__text">
    <h2>DStv Premium Golf Day</h2>
    <p>
    The DStv Premium Golf Day is a special competition for DStv premium subscribers to appreciate their support for the DStv brand over the years. 
    <br/><br/>
    The maiden edition, which held at the prestigious Ikeja Golf Club, attracted over 100 golfers.
    <br/><br/>
    Participants won various prizes including an all-expense paid trip to Dubai for the winner, the first runner up won a free trip to Rwanda and the seconder 
    runner-up went home with a free weekend stay at a luxury hotel in Lagos.

<br/><br/>

There were also consolation prizes including a 
giant television set, a refrigerator and hundreds of goodie bags.

 <br/><br/>


 
        </p>
         </div>
         <Link to='' className="popup-close" pd-popup-close="popupNew2"></Link>
</div>

          </div>
      </div>



  {/*GOtv Boxing NextGen Search */}       
  <div className="popup" pd-popup="popupNew3">
          <div className="popup-inner">
<div className="modalcontainer">
  <img className="modalcontainer__image" src="assets/img/portfolio/v131_1.png" alt="" />
  <div className="modalcontainer__text">
    <h2>GOtv Boxing NextGen Search</h2>
    <p>
    Debuted in February 2015 as an initiative to replenish Nigeria’s depleted pool of 
    professional boxers
    <br/><br/>
    The five editions so far held in Lagos, Ibadan, Abeokuta and Ilorin have served as auditions for young and 
    talented aspiring professional boxers, who had had no outlet for their talents

<br/><br/>

GOtv Boxing NextGen Search, supported by the Nigerian Boxing Board of Control,
 uses the best of Nigerian boxing coaches as assessors 

 <br/><br/>
Selected boxers, who have their professional boxing licences paid for, are camped, 
trained and nurtured to competition-ready status by the coaches
<br/><br/>

The initiative has unearthed many boxing gems,
 most notably the 24-year old Rilwan “Baby Face” Babatunde, 
 the current West African lightweight champion who is one of the
  leading lights in the Nigerian boxing world at the moment.
  <br/><br/>

 
        </p>
         </div>
         <Link to='' className="popup-close" pd-popup-close="popupNew3"></Link>
</div>

          </div>
      </div>

       </Fragment>
    )
}

export default PortfolioDetails
