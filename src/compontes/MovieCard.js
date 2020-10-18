import React from "react";
import {Card,Col} from "react-bootstrap";
import propTypes from "prop-types"
import ReactStars from 'react-rating-stars-component';

import "./MovieCard.css";

const MovieCard = ({movie}) => {

  
  return (
    <div className="profile-card">
      
              
          
      <Card style={{ width: "18rem",
      height: "30rem",
          marginRight: "30px",
          marginLeft: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)" }}>
  <Card.Img  src={movie.posterUrl}
  
            
            style={{
              height: "300px",
              
              bottom: "80px",
              border: "10px solid white",
              backgroundColor: "transparent"
            }}/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    
  </Card.Body>
  <Card.Footer><ReactStars value={movie.rate} edit={false}/></Card.Footer>
</Card>

    </div>
  );
};




MovieCard.propTypes={
    title: propTypes.string,
    description : propTypes.string,
    posterUrl : propTypes.string,
    rate : propTypes.number
}

export default MovieCard
