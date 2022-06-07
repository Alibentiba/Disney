import React from 'react';
import Slider from "react-slick";
import "./Slider.css"
import banner from '../Exo/banner.jpg'
import Carousel from 'react-bootstrap/Carousel'


const Sliderhome = () => {
return (
<Carousel fade={true} pause={false} className='Carousel'>
<Carousel.Item interval={2000} className='car'>
  <img
    className="d-block"
    src={banner} 
    alt="First slide"
  />
  <Carousel.Caption>
    <h3></h3>
    <p></p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={2000} className='car'>
  <img
    className="d-block"
    src={banner}
    alt="Third slide"
  />
  <Carousel.Caption>
    <h3></h3>
    <p></p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={2000} className='car'>
  <img
    className="d-block"
    src={banner}
    alt="Third slide"
  />
  <Carousel.Caption>
    <h3></h3>
    <p></p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>







  );
  };
  
export default Sliderhome