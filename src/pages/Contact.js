import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
const ContactPage = () => {
    return (
        <Fragment>
      <section className="banner_part section_bg">  
    <div className="container"  id="contactmobile">
                    <div className="col-lg-12" style={{marginTop:'-40px'}}  >
                      <h1 className="heading-section mb-5" >Contact Us</h1>                      
                      <section id="contact" >
  <div className="contact-wrapper">     

  <form id="contact-form" className="form"  >
  <div className="form-group">
<label className="form-label"></label>
     <input type="text"  name="firstname" id="firstname"  className="form-control" placeholder="Your Name"  required />
                 </div>
                 
  <div className="form-group">
                  <label className="form-label"></label>
  <input type="email"  name="email" id="email"  className="form-control" placeholder="Your Email"  required />
                 </div>      
              <div className="form-group">
                  <label className="form-label"></label>
                  <textarea rows="5" cols="50"   name="body" id="body" className="form-control"  placeholder="Tell us a bit about your need " tabIndex={4}   required  ></textarea>                                 
              </div>

              <div className="contT">  
        <button type="submit" className="contact-btn "><span>Submit</span> <i className="bx bx-chevron-right hvr-icon"></i></button>
                </div>
             
          </form>
            
    
  <div className="direct-contact-container">

<ul className="contact-list" >
  <li className="list-item">
  <i className="fa fa-map-marker fa-2x">
    <span className="contact-text place" >
    14 Adefolu Drive, off <br/>
    &nbsp;&nbsp; &nbsp;Allen  Avenue, 
    Ikeja, <br/> &nbsp;&nbsp; &nbsp;Lagos.
       </span></i>
       </li>


      <br/>
      <li className="list-item">
   
   <i className="fa fa-phone fa-2x">
     <span className="contact-text place" >
     <Link to="tel:+234-908-502-27775" title="Give me a call">+234-908-502-2777</Link>
        </span></i>
        </li>

  <br/>


  <li className="list-item">
   
   <i className="fa fa-envelope fa-2x">
     <span className="contact-text place" >
     <Link to="mailto:Info@flykite.ng" title="Send me an email">Info@flykite.ng</Link>
        </span></i>
        </li>

</ul>
<ul className="social-media-list">
  <li>
    <Link to=""   onClick={()=> window.open("https://web.facebook.com/flykiteboxing", "_blank")}>
      <i className="fa fa-facebook" ></i></Link>
  </li>
  <li>
    <Link to=""  onClick={()=> window.open("https://twitter.com/flykiteboxing", "_blank")} >
    <i className="fa fa-twitter"></i></Link>
  </li>
 
  <li><Link to=""  onClick={()=> window.open("https://instagram.com/flykiteboxing", "_blank")}>
    <i className="fa fa-instagram" ></i></Link>
  </li>       
</ul>

</div>
    
   
  </div>
</section>  
  
  
</div>

            

                   </div>
   
</section>
                    
                    
  </Fragment>
    )
}

export default ContactPage
