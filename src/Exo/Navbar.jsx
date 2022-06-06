import React, { useState } from 'react'
import './Exo.css'
const Navbar = () => {
 
  const[active,setactive]=useState('nav-menu')
  const[activetoglle,setactivetoglle]=useState('nav__toggler')
  const toggle=()=>{
     active==='nav-menu' ? setactive('nav-menu nav-active'):setactive('nav-menu');
     activetoglle==='nav__toggler' ? setactivetoglle('nav__toggler toglle'):setactivetoglle('nav__toggler');
  }

  return (
<nav className='navbar'>
    <a href="" className='brand'>brand</a>
        <ul className={active}>
       <li className='nav-i'><a href="" className='nav-link'>Home</a></li> 
       <li className='nav-i'><a href="" className='nav-link'>Produt</a></li> 
       <li className='nav-i'><a href="" className='nav-link'>Navigation</a></li> 
       <li className='nav-i'><a href="" className='nav-link'>deconcter</a></li> 
        </ul>
      <div className={activetoglle} onClick={toggle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
   </nav>
  )
}

export default Navbar