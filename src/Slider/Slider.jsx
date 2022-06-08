import React from 'react';
import Slider from "react-slick";
import "./Slider.css"
import banner from '../Exo/banner.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {useSelector} from 'react-redux'


const Sliderhome = () => {
const mov= useSelector(state=>state.userstore.movies)

return (
<Carousel fade={true} pause={false} className='Carousel'>

{mov.map((item,index) =>{
const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
return(
<Carousel.Item interval={2000} className='car'>
  <img className="d-block"src={cardImg} alt="First slide"/>
  <Carousel.Caption>
    <h3></h3>
    <p></p>
  </Carousel.Caption>


</Carousel.Item>
  );
})}

</Carousel>

  )}
  
export default Sliderhome