import React from 'react'
import "./Detail.css"
import { FaPlay} from "react-icons/fa";
import {RiGroup2Fill } from "react-icons/ri";
import { useSelector } from 'react-redux';
export const Detail = () => {

  const Detailsmov= useSelector(state=>state.userstore.Detaill)
  return (
    <div className='Container'>
  <div className='Container-image'>
    <img className='Container-img' src={Detailsmov.backgroundImg} alt="jjjf" />
  {/* style={{backgroundImage: `url(`+ Detailsmov.backgroundImg +`)`  }} */}

      <div className='Container-details'>
      
     <img className='Container-detailsimg'  src={Detailsmov.titleImg} alt="" />
 
    <div className='buttons-details'>
        <button className='b1'><FaPlay/><span>PLAY</span> </button>
        <button className='b2'><FaPlay/><span>TRAILER</span> </button>
        <button className='b3'>+</button>
        <button className='b4'><RiGroup2Fill /></button>
    
    </div>
    <div className='subtitle'>
     <p className='p1'>{Detailsmov.subTitle}</p>
     <p className='p2'>{Detailsmov.description}</p>
    </div>
    
          </div>
    
      </div>
     


  </div>
);
};

