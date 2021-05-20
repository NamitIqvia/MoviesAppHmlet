import React from 'react';
import { useLocation } from "react-router-dom"
import './MovieDetails.css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = (props) => {
    const location = useLocation()
    console.log("movie data");
    //console.log(location.state.movieData)
    return (
        <>
        <h1 className="cardDetailsTitle">{location.state.movieData.title}</h1>
        <div className="movieDetails">
          <div className="ImageContainer"> 
             <img src={location.state.movieData.poster_path ? IMG_API+location.state.movieData.poster_path : "https://images.unsplash.com/photo-1512070750041-b9479c107194?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt={location.state.movieData.title} />
          </div>

          <div className="OverviewContainer">
            <h2>Summary</h2>
            <p>{location.state.movieData.overview}</p>
            <h4>Release Date : {location.state.movieData.release_date}</h4>
            <h4>Original Language : {location.state.movieData.original_language}</h4>
          </div>
        </div>
        </>
    )
}

export default MovieDetails;
