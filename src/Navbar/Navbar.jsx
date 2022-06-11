import React, { useState,useEffect} from 'react'
import './Navbar.css'
import {signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { getAuth} from "firebase/auth";
import { useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setUserLoginDetails,setSignOutState} from '../Slice'
  import Button from 'react-bootstrap/Button'
import Logo from '../images/logo.svg'
import { FaHome,FaSearch,FaPlus,FaStar } from "react-icons/fa";
import {GiFilmSpool} from "react-icons/gi";
import {IoMdRadio} from "react-icons/io";


const Navbar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
    const userName = useSelector(state=>state.userstore.userinfo.name);
  const userPhoto = useSelector(state=>state.userstore.userinfo.photo );
  const[active,setactive]=useState('nav-menu')
  const[activetoglle,setactivetoglle]=useState('nav__toggler')
  const toggle=()=>{
     active==='nav-menu' ? setactive('nav-menu nav-active'):setactive('nav-menu');
     activetoglle==='nav__toggler' ? setactivetoglle('nav__toggler toglle'):setactivetoglle('nav__toggler');
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
          const auth = getAuth();
          signInWithPopup(auth, provider)
            .then((result) => {
          
              setUser(result.user);



        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
                })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
<nav className='navbar'>
  <div className='brand'>
  <img src={Logo}alt='Logo' />
  </div>
  {!userName ? (
        <Button variant="outline-dark" className='Login'  onClick={handleAuth}>Login</Button>
      ) : (
    <>
        <ul className={active}>
       <li><a href="#" className='nav-Link'><FaHome alt="fg"/>HOME</a></li> 
       <li><a href="" className='nav-Link'><FaSearch alt="fg"/>SEARCH</a></li> 
       <li><a href="" className='nav-Link'><FaPlus alt="fg"/>WATCHLIST</a></li> 
       <li><a href="" className='nav-Link'><FaStar alt="fg"/>ORIGINALS</a></li> 
       <li><a href="" className='nav-Link'><GiFilmSpool alt="fg"/>MOVIES</a></li> 
       <li><a href="" className='nav-Link'><IoMdRadio alt="fg"/>SERIES</a></li>
       <div className='SignOut' >
            <img className='UserImg'  src={userPhoto} alt={userName} />
            <button className='DropDown' onClick={handleAuth}>Sign out</button>
           
          </div>
        </ul>
      <div className={activetoglle} onClick={toggle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>

      </div>
       
           </>  )}  
   </nav>
  )
}

export default Navbar