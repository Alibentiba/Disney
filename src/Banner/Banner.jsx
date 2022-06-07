import React from 'react'
import './Banner.css'
import Carousel from 'react-bootstrap/Carousel'
import banner from '../Banner/banner.jpg'
const Banner = () => {
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

  )
}

export default Banner