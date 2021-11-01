import React from 'react'
import { Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

const Features = () => {
  const settings = {
    focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      speed: 500,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          arrows:true,
            infinite: true,
            dots: true,
            autoplay: true,
           
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows:true,
          slidesToShow: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows:true,
          slidesToShow: 1,
          infinite: true,
            dots: true,
            autoplay: true,
            
        }
      }
    ]
  };
    return (
        <Fragment>
   <Slider     {...settings}>
   <Link to='' onClick={()=> window.open("https://www.youtube.com/channel/UCmg7eWG-mKWuN8XzpsuLtsQ", "_blank")}>
     <section className="feature_part">
      <div className="single_feature_post_text">
                        <img src="assets/img/sports/cat-1.png" alt="#"/>
                        <div className="hover_text">
                        <h3>GOTV Boxing Night</h3>
                        <span className="cat">Biggest Boxing Show in Africa</span>
            </div>
        </div>
    </section>
    </Link>


    <Link  to='' className="link" id="l4">
      <section className="feature_part">
      <div className="single_feature_post_text">
                        <img src="assets/img/sports/cat-2.png" alt="#"/>
                        <div className="hover_text">
                        <h3>Golf Events</h3>
                        <span className="cat">DStv Premium Golf Day</span>
            </div>
        </div>
    </section>
    </Link>

    <Link to='/' id="l3" className="link" >
    <section className="feature_part">
      <div className="single_feature_post_text">
                        <img src="assets/img/sports/cat-3.png" alt="#"/>
                        <div className="hover_text">
                        <h3>Our Services</h3>
                        <span className="cat"></span>
            </div>
        </div>
    </section>
    </Link>

    <Link to='/'><section className="feature_part">
      <div className="single_feature_post_text">
                        <img src="assets/img/sports/cat-1.png" alt="#"/>
                        <div className="hover_text">
                        <h3>GOTV Boxing Night</h3>
                        <span className="cat">Biggest Boxing Show in Africa</span>
            </div>
        </div>
    </section>
    </Link>


    
</Slider> 


        </Fragment>
    )
}

export default Features
