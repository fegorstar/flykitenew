
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const  Header= () => {

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)


  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  

  return (

<Fragment>

       <header className={navbar ? "main_menu active" : "main_menu"} >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="main_menu_iner">
                        <div className="logo" >
                        <Link  to='/'><img src="assets/img/logo.png" alt="logo" width="160px" style={{ marginTop:'-12px'}} /></Link>                
                        </div>
                       
                        <span className="menu-trigger visible-xs">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div className="off-canven-menu">
                            <span className="close-icon">
                                <i className="ti-close"></i>
                            </span>
                            <div className="canven-menu-warp">
                                <div id="navbar" className="canven-menu-iner">
                                    <ul>
                                  <li ><Link to='/' className="active">Home</Link></li>  
                                  <li><Link to='/about'>About</Link></li>
                                  <li><Link  to='/service' >Service</Link></li>
                                 <li><Link  to='/portfolio'  >Portfolio</Link></li> 
                                 <li><Link  to='/gOtvboxingNight' >GOtvBoxing Night</Link></li>
                                    <br/>
                                    <li><Link  className="contact_btn"  to='/contact'  ><span className="contactText">Contact Us</span></Link></li>
                                  
                                    </ul>
                                    <ul className="mt-2 mb-0">
        <Link className="list-inline-item" to={ 'https://web.facebook.com/flykiteboxing'}
              target='_blank'
              aria-label='Facebook'>
        <i className="tf-ion-social-twitter"></i>
              </Link>
        
              <Link className="list-inline-item" to={'https://twitter.com/flykiteboxing'}
              target='_blank'
              aria-label='Twitter'>
        <i className="tf-ion-social-facebook"></i>
              </Link>

              <Link className="list-inline-item" to={'https://instagram.com/flykiteboxing'}
              target='_blank'
              aria-label='Instagram'>
       <i className="tf-ion-social-instagram"></i>
              </Link>

              <Link className="list-inline-item" to={'https://www.youtube.com/channel/UCmg7eWG-mKWuN8XzpsuLtsQ'}
              target='_blank'
              aria-label='Youtuber'>
      <i className="tf-ion-social-youtube"></i>
              </Link>


						</ul>
                        
                                 </div>
                                 </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </header>   
    </Fragment>
  );
}

export default Header
