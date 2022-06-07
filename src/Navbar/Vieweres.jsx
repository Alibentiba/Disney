import React from 'react'
import viewersmarvel from '../images/viewers-marvel.png'
import viewersnational from '../images/viewers-national.png'
import viewersdisney from '../images/viewers-disney.png'
import viewersstarwars from "../images/viewers-starwars.png"
import viewerspixar from "../images/viewers-pixar.png"
import "./Viewers.css"
import marvel from "../videos/1564676115-marvel.mp4"
// import {useSelector } from 'react-redux'
import disney from "../videos/1564674844-disney.mp4"
import national from "../videos/1564674844-disney.mp4"
import pixar from "../videos/1564676714-pixar.mp4"
import star from "../videos/1608229455-star-wars.mp4"


const Vieweres = () => {

  return (
    <div className='Viewers'>
        <div className='Viewers-image V1'>
        <img src={viewersmarvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src={marvel}
            type="video/mp4"
          />
        </video>

        </div>

        <div className='Viewers-image V2'>
        <img src={viewersnational} alt="" />  
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src={national}
            type="video/mp4"
          />
        </video>  
            </div>

        <div className='Viewers-image V3'>
        <img src={viewersdisney} alt="" />   
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src={disney}
            type="video/mp4"
          />
        </video>
             </div>

        <div className='Viewers-image V4'>
        <img src={viewersstarwars} alt="" />  
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={star}type="video/mp4"/>
        </video>  
            </div>
       <div className='Viewers-image V5'>
        <img src={viewerspixar} alt="" />  
        <video
        muted={true}
         autoPlay={true}
         preLoad={true}
         loop={true} playsInline={true}>
          <source src={pixar}type="video/mp4"/>
        </video>  
       
   </div>



    </div>
  )
}

export default Vieweres