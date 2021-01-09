import React from 'react';
import {Link} from 'react-router-dom'

export default function Card (props){

    return(
        <div className="Card-container col-3">

<Link style={{textDecoration: 'none', color:"black"}} to={
    { 
        pathname: "/trailer/" + props.ItemCard.id,
        myCustomProps: props.ItemCard
    }
}>
      
      <img src={props.ItemCard.poster} className="Image-container" alt={props.ItemCard.name}/>

      <div className="Movie-name">
          <h3>{props.ItemCard.name}</h3> 
      </div>

      <div className="Reviews">
          <h6>{props.ItemCard.review}</h6>
      </div>
      <div className="Trailer">
          
      </div>


 </Link>
 </div>
)
}
