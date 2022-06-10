import React, { useState } from 'react'
import './Navbar.css'
import { FaHome,FaSearch,FaPlus,FaStar } from "react-icons/fa";
import {GiFilmSpool} from "react-icons/gi";
import {IoMdRadio} from "react-icons/io";
const Nvabar = () => {
  const[active,setactive]=useState('nav-menu')
  const[activetoglle,setactivetoglle]=useState('nav__toggler')
  const toggle=()=>{
     active==='nav-menu' ? setactive('nav-menu nav-active'):setactive('nav-menu');
     activetoglle==='nav__toggler' ? setactivetoglle('nav__toggler toglle'):setactivetoglle('nav__toggler');
  }


  return (
<nav className='navbar'>
  <div className='brand'>
  <a href="" >MOVIES</a>
  </div>
    
        <ul className={active}>
       <li><a href="#" className='nav-Link'><FaHome alt="fg"/>HOME</a></li> 
       <li><a href="" className='nav-Link'><FaSearch alt="fg"/>SEARCH</a></li> 
       <li><a href="" className='nav-Link'><FaPlus alt="fg"/>WATCHLIST</a></li> 
       <li><a href="" className='nav-Link'><FaStar alt="fg"/>ORIGINALS</a></li> 
       <li><a href="" className='nav-Link'><GiFilmSpool alt="fg"/>MOVIES</a></li> 
       <li><a href="" className='nav-Link'><IoMdRadio alt="fg"/>SERIES</a></li>
        </ul>
      <div className={activetoglle} onClick={toggle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>

      </div>
   </nav>
  )
}

export default Nvabar