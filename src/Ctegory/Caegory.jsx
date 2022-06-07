import React from 'react'
import "./Caegory.css"
import {addDetaill} from '../Slice'
import {Link} from 'react-router-dom'

import { useDispatch } from 'react-redux'
const Caegory = ({Cat}) => {

const dispatch =useDispatch()

  return (
 
 <div className="Row">
  {Cat.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (
 <Link to={`/Detail/`+id}>
 <img key={id} src={cardImg} alt="ddd" onClick={() => dispatch(addDetaill(item))}/> </Link> )})}

  </div>
  )
}

export default Caegory