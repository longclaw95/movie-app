import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

const Details = ({listAllMovies,match}) => {
    const selected_film = listAllMovies.find( element => element.title===match.params.moviename)
    return (
        <div>
             
            <Link to='/' style={{color: 'inherit', textDecoration: 'inherit'}}><p className='back_home'> Back to Home</p></Link>
            <h2>{selected_film.title}</h2>
            <img   src={selected_film.posterUrl} alt='' />
            <p>{selected_film.description}</p>
            <div>
                <h3>watch the trailer</h3>
            <ReactPlayer width='500px' height='400px' style={{marginLeft:'33%',marginBottom:'70px'}} url={selected_film.trailer} controls={true} />
            </div>
        </div>
    )
}

export default Details
