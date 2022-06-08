import React from 'react'
import "./Detail.css"
import { FaPlay,FaPlusCircle } from "react-icons/fa";
import {RiGroup2Fill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar'
export const Detail = () => {

  const Detailsmov= useSelector(state=>state.userstore.Detaill)
  return (
    <div className='Container'>
          <Navbar/>

      <div className='Container-image' style={{backgroundImage: `url(`+ Detailsmov.backgroundImg +`)`  }}>

      <div className='Container-detaiil'>
      
  <img src={Detailsmov.titleImg} alt="" />
 
    <div className='buttons'>
        <button className='button1'><FaPlay/><span>PLAY</span> </button>
        <button className='button1 traille'><FaPlay/><span>TRAILER</span> </button>
        <button className='button2'>+</button>
        <button className='button2'><RiGroup2Fill /></button>
    
    </div>
    <div className='subtitle'>
     <p>{Detailsmov.subTitle}</p>
     <p>{Detailsmov.description}</p>
    </div>
    
          </div>
    
      </div>
     


  </div>
);
};

