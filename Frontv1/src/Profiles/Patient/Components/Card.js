import React from 'react';
import './Card.css';
import Image1 from './images.png';


const Card = (props) => {
    return(
        <div className="card" >
        <img className="d-block w-100"img src={Image1} alt="First slide" style={{width:"auto",height:"auto"}}/>
        <div className="card-body">
          <h4 class="card-title">{props.title}</h4>
          <p class="card-text">{props.text}</p>
         
        </div>
      </div>
    )
}
export default Card