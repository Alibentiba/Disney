import React from 'react'
import "./Mov.css"
import Row from '../Row/Row'
import {useSelector} from 'react-redux'
const Movies = () => {
  const mov= useSelector(state=>state.userstore.movies)
  const recommende= useSelector(state=>state.userstore.recommend).concat(mov);
  const trending= useSelector(state=>state.userstore.trending).concat(mov);
  const original= useSelector(state=>state.userstore.original).concat(mov);
  const news= useSelector(state=>state.userstore.news).concat(mov);
  

  return (
   <div className='Mov'>
     <span>recommende</span>
  <Row Cat={recommende}/>
  <span>original</span>

  <Row Cat={original}/>
  <span>trending</span>

  <Row Cat={trending}/>
  <span>original</span>

  <Row Cat={original}/>
  <span>recommende</span>

  <Row Cat={recommende}/>
 
  <span>trending</span>

  <Row Cat={trending}/>

  <span>news</span>

  <Row Cat={news}/>
    </div>)}

export default Movies



