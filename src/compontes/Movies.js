import React from 'react'
import MovieCard from './MovieCard'
import {Container,Col ,Row, Form, FormControl, Button} from "react-bootstrap";

const Movies = ({movies}) => {
    return (
        <Container>
        <Row>
        <div style={{display:"flex"}}>
            {movies.map((el, i)=>(<MovieCard key={i} movie={el} />))}
        </div>
        </Row>
        </Container>
    )
}

export default Movies
