import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Navbar} from 'react-bootstrap';
import "./css.css";






function trailer(props) {

    return (
        <div>

<div className="nav">
<Link className="home" to="/">home</Link>
</div>

<Card className="d-flex justify-content-center container " >
  <Card.Body>
  <h2 >{props.location.myCustomProps.name}</h2>
    <Card.Text>
    {props.location.myCustomProps.description}
    </Card.Text>
    <iframe width="560" height="315" src={props.location.myCustomProps.vid} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  </Card.Body>
</Card>

        </div>
        
    )
    
}
export default trailer; 