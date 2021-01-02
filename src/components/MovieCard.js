import React from 'react';

export default function Card (props){
    return(

  <div className="Card-container col-3">
      
      <img src={props.ItemCard.poster} className="Image-container" alt={props.ItemCard.name}/>

      <div className="Movie-name">
          <h3>{props.ItemCard.name}</h3> 
      </div>

      <div className="Movie-description">
      <p>{props.ItemCard.description}</p>
      </div>

      <div className="Reviews">
          <h6>{props.ItemCard.review}</h6>
      </div>

  </div>
)
}
