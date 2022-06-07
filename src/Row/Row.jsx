import React from 'react'
import "./Row.css"
import {addDetaill} from '../Slice'
import {Link} from 'react-router-dom'

import { useDispatch } from 'react-redux'
const Row = ({Cat}) => {

const dispatch =useDispatch()

  return (
<div className="row">
<h2>car1</h2>
<div className="row_posters">
  {Cat.map((item,index) => {
     const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
    return (
   <Link  to={`/Detail/`+id}>
    <img className="row_poster" key={index} src={cardImg} alt="ddd" onClick={() => dispatch(addDetaill(item))}/>
     </Link> 
    );
  })}
</div>
</div>

  )}

export default Row