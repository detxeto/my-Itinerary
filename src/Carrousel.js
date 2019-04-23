import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bcn from './Images/cities/bcn.jpg';
import ams from './Images/cities/amsterdam.jpg';
import lis from './Images/cities/lisboa.jpg';
import ber from './Images/cities/berlin.jpg';
import cop from './Images/cities/copenhagen.jpg';
import dub from './Images/cities/dubrovnik.jpg';
import edi from './Images/cities/edinburgh.jpg';
import lon from './Images/cities/london.jpg';
import med from './Images/cities/medellin.jpg';
import nyo from './Images/cities/newYork.jpg';
import rom from './Images/cities/roma.jpg';
import par from './Images/cities/paris.jpg';

 class MultipleRows extends React.Component {
  render() {
    const settings = {
      
      
      slidesToShow: 2,
      slidesToScroll:2,
     
      rows: 2,
      slidesPerRow: 1,
      dots:true
      
    };
    return (
      <div className="container">
     <h4 className="textInSlider">Popular MYitineraries:</h4>
        <Slider {...settings}>
          <div >
            <img src={bcn} alt="barcelona" className='CarouselImg'/>
          </div>
          <div>
            <img src={ams} alt="amsterdam" className='CarouselImg'/>
          </div>
          <div>
            <img src={lis} alt="lisboa"className='CarouselImg' />
          </div>
          <div>
           <img src={par} alt="paris" className='CarouselImg'/>
          </div>
         
          <div>
            <img src={ber} alt="berlin" className='CarouselImg' />
          </div>
          <div>
            <img src={cop} alt="copenhagen" className='CarouselImg' />
          </div>
          <div>
            <img src={dub} alt="dubrovnik" className='CarouselImg' />
          </div>
          <div>
            <img src={edi} alt="edinburgh" className='CarouselImg' />
          </div>
          
          <div>
            <img src={lon} alt="london"  className='CarouselImg'/>
          </div>
          <div>
            <img src={med} alt="medellin" className='CarouselImg' />
          </div>
          <div>
            <img src={nyo} alt="NewYork" className='CarouselImg' />
          </div>
          <div>
            <img src={rom} alt="roma"  className='CarouselImg'/>
          </div>
        </Slider>
      </div>
    );
  }
}


export default MultipleRows;



