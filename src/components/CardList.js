import React from 'react';
import MovieCard from "./MovieCard"
export default class CardsList extends React.Component {
    render(){
        return(
           
               <div className="row text-center flex-d justify-content-center" >
              {
               this.props.objCard.map((val)=> {
                return(
                <MovieCard ItemCard={val} />
            )
        } 
        )
            
            }
            </div>

         )
    

 
        

  
}}