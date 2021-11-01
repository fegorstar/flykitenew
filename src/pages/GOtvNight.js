import React, {Fragment} from 'react'
import MetaData from '../components/MetaData';
// data 
import data from '../components/counts/data.json'
import Count from '../components/counts/Count';


const GOtvNight = () => {


    return (
<Fragment>

     {/*Meta Data */}
     <MetaData title="GOtvBoxingNight" 
description="Flykite Productions possesses expertise in audio-visual productions and content creation, with capacity for producing premium-grade television/radio programmes and commercials for the domestic and international markets." /> 

            <section className="banner_part section_bg">  
<section id="gotvbN" className="gotvbN">
      <div className="container">

        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in">
            <img src="assets/img/gotvBoxingNight/gotvbN.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-contents-center" data-aos="fade-left">
            <div className="content pt-4 pt-lg-0">
             
              <p className="fst-italic">
 GOtv Boxing Night's combination of Las Vegas-style entertainment
and sport makes it the only sporting event that attracts bigger crowds
than 90 per cent of domestic league matches, as attested to by the
Chairman, League Management Company
Gotv Boxing Night is the biggest ever professional boxing event in the
history of the sport in Nigeria . 
<br/><br/>
The event has delivered the biggest pay-out to a boxer fighting locally,
when N2million in addition to his fighter’s purse, was won by Rilwan
“Babyface” Babatunde in March 2017.

              </p>
     
            </div>
          </div>
        </div>

      </div>
    </section>


    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
        {data.counts.map(count => <Count key={count.id} data={count}/>)}
        </div>
      </div>
    </section>

    

    <section id="pricing" className="pricing">
    <div className="col-md-11 col-md-offset-1 ">
            <table className="pricing-table-box d-flex flex-column justify-content-center">
                <tbody>
                    <tr>
                        <td width="30%" className="pricing-table-box-text">
                            <h2>Brand Sponsorship Opportunities</h2>
                        </td>
                        <td width="20%">
                            <div className="pricing-table-box-item">
                                <div className="pricing-table-box-item-head">
                                    <p>Silver</p>
                                </div>
                                <div className="pricing-table-box-item-price">
                                    <p>&#8358; 10,000,000</p>
                                </div>
                            </div>
                        </td>
                        <td width="20%">
                            <div className="pricing-table-box-item">
                                <div className="pricing-table-box-item-head">
                                    <p>Gold</p>

                                </div>
                                <div className="pricing-table-box-item-price">
                                    <p>&#8358; 15,000,000</p>

                                </div>

                            </div>
                        </td>
                        <td width="20%">
                            <div className="pricing-table-box-item">
                                <div className="pricing-table-box-item-head">
                                    <p>Platinum</p>

                                </div>
                                <div className="pricing-table-box-item-price">
                                    <p>&#8358; 50,000,000</p>
                                </div>

                            </div>
                        </td>
                    </tr>
      
                    <tr className="pricing-table-box-list">
                        <td className="first-row">55 secs TVC in between bouts on live telecast </td>
                        <td className="second-row">2</td>
                        <td className="third-row">3</td>
                        <td className="fourth-row">6</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Scroll Messages</td>
                        <td className="second-row">5</td>
                        <td className="third-row">10</td>
                        <td className="fourth-row">15</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Brand logo on walls panels</td>
                        <td className="second-row">-</td>
                        <td className="third-row">1</td>
                        <td className="fourth-row">3</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Brand logo on Ring pad</td>
                        <td className="second-row">-</td>
                        <td className="third-row">1</td>
                        <td className="fourth-row">1</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Brand logo on Ring panel</td>
                        <td className="second-row">-</td>
                        <td className="third-row">1</td>
                        <td className="fourth-row">1</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Logo display on walkways</td>
                        <td className="second-row">-</td>
                        <td className="third-row">-</td>
                        <td className="fourth-row">1</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Brand Logo Display on Floor space around Boxing Ring </td>
                        <td className="second-row">-</td>
                        <td className="third-row">-</td>
                        <td className="fourth-row">1</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Logo on Perimeter Railing</td>
                        <td className="second-row">-</td>
                        <td className="third-row">1</td>
                        <td className="fourth-row">2</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Opportunity to display pull up banners around the venue</td>
                        <td className="second-row">5</td>
                        <td className="third-row">5</td>
                        <td className="fourth-row">10</td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Logo on T-shirts of Ring Ladies</td>
                      
                        <td className="second-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="third-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="fourth-row"><span className="glyphicon glyphicon-ok"></span></td>
                    </tr>

                    <tr className="pricing-table-box-list">
                        <td className="first-row">Brand logo on all publicity materials including fliers</td>
                        <td className="second-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="third-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="fourth-row"><span className="glyphicon glyphicon-ok"></span></td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Brand logo on photo wall for all photogrpahy
                        aspects of event including press conference & weigh-in ceremony</td>
                      
                        <td className="second-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="third-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="fourth-row"><span className="glyphicon glyphicon-ok"></span></td>
                    </tr>

                    <tr className="pricing-table-box-list">
                        <td className="first-row">Hype by Compare during Event</td>
                        <td className="second-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="third-row"><span className="glyphicon glyphicon-ok"></span></td>
                        <td className="fourth-row"><span className="glyphicon glyphicon-ok"></span></td>
                    </tr>
                    <tr className="pricing-table-box-list">
                        <td className="first-row">Logo on Ringside branding</td>
                      
                        <td className="second-row">-</td>
                        <td className="third-row">-</td>
                        <td className="fourth-row">1</td>
                    </tr>

                    <tr className="pricing-table-box-list">
                        <td className="first-row">Ringside invites for distribution to customers & staff</td>
                        <td className="second-row">10</td>
                        <td className="third-row">20</td>
                        <td className="fourth-row">40</td>
                    </tr>
                   
                    <tr className="pricing-table-box-list">
                        <td className="first-row"></td>
                        <td className="second-row">
                            <div className="pricing-table-box-item-purchase">
                                <button className="btn btn-success btn-block hvr-shrink">SIGN UP</button>
                            </div>
                        </td>
                        <td className="third-row">
                            <div className="pricing-table-box-item-purchase">
                                <button className="btn btn-warning btn-block hvr-shrink">SIGN UP</button>
                            </div>
                        </td>
                        <td className="fourth-row">
                            <div className="pricing-table-box-item-purchase">
                                <button className="btn btn-primary btn-block hvr-shrink">SIGN UP</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>   

        </section>

      
   



    </section>
</Fragment>
    )
}

export default GOtvNight
