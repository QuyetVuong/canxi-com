import React from 'react';
import Slider from 'react-slick';
import product from '../../../assets/images/show.jpg';
import product1 from '../../../assets/images/show1.jpg';
import product2 from '../../../assets/images/show2.jpg';
import product3 from '../../../assets/images/show3.jpg';
import product4 from '../../../assets/images/show4.jpg';
import product5 from '../../../assets/images/show5.jpg';

export function ProductSlideshow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
      };
      
    
      return (
        <div className="slideshow-container">
          <Slider {...settings}>
            <div>
              <img src={product} alt="Product 1" />
            </div>
            <div>
              <img src={product1} alt="Product 2" />
            </div>
            <div>
              <img src={product2} alt="Product 3" />
            </div>
            <div>
              <img src={product3} alt="Product 4" />
            </div>
            <div>
              <img src={product4} alt="Product 5" />
            </div>
            <div>
              <img src={product5} alt="Product 6" />
            </div>
          </Slider>
        </div>
      );
}


