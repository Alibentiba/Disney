import React  from 'react'
import './Home.css'
import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'
import Navbar from '../Navbar/Navbar'


const Home = ()=>{
  return (
    <div className='Home'>
  <Navbar/>
  <Sliderhome/>
  <Vieweres/>
  <Movies/>

  </div>
  )
}

export default Home




