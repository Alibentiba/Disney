import React from 'react'
import "./Mov.css"
import Caegory from '../Ctegory/Caegory'
import {useSelector} from 'react-redux'
const Movies = () => {
  const mov= useSelector(state=>state.userstore.movies)
  const recommende= useSelector(state=>state.userstore.recommend).concat(mov);
  const trending= useSelector(state=>state.userstore.trending).concat(mov);
  const original= useSelector(state=>state.userstore.original).concat(mov);
  const news= useSelector(state=>state.userstore.news).concat(mov);
  

  return (
   <div className='Mov'>
  <Caegory Cat={recommende}/>
  <Caegory Cat={original}/>
  <Caegory Cat={trending}/>
  <Caegory Cat={original}/>
  <Caegory Cat={recommende}/>
  <Caegory Cat={original}/>
  <Caegory Cat={trending}/>
  <Caegory Cat={original}/>
  <Caegory Cat={news}/>
    </div>)}

export default Movies



