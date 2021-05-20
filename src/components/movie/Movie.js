import React, { useEffect, useState } from 'react';
import './Movie.css';
import Moviegrid from './Moviegrid';


const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=e2dc6097770ffd325b2d2eceac46f1ce&query=";

const Movie = () => {
   
    const savedMovies = JSON.parse(localStorage.getItem('moviesdb'));
    const [currentMovie, setCurrentMovie] = useState("");
    const [searchMovie, setSearchMovie] = useState("")
    const [movies, setMovies] = useState(savedMovies || []);
    const [showLoading, setShowLoading] = useState(false);
    const [noMovieStatus, setNoMovieStatus] = useState(false);

     const getMovies = async () => {
        if(searchMovie){
        const response = await fetch(searchApi + String(searchMovie))
        let moviesList = await response.json();
        console.log(moviesList.results)
        setMovies(moviesList.results);
        localStorage.setItem('moviesdb', JSON.stringify(moviesList.results))
        if(moviesList.results.length === 0){
            setNoMovieStatus(true)
        }
        else{
            setNoMovieStatus(false)
        }
        setShowLoading(false)
     }
    }

     const addMovies = (e) => {
        setCurrentMovie(e.target.value)
    }

     const preventDefaultSubmit = (e) => {
        e.preventDefault();
        setShowLoading(true)
        setSearchMovie(currentMovie)
        setCurrentMovie("")
    }

    useEffect(() => {
        getMovies(searchMovie)
    }, [searchMovie])

    return (
        <>
         <h1 className="app-heading">Find your favourite movies below!!!</h1>
         <form onSubmit={(e) => {preventDefaultSubmit(e)}}>
           <input type="text" data-testid="search bar" value={currentMovie} onChange={(e) => {addMovies(e)}} className="search-box" placeholder="Enter the movie name here....."  />
         </form>

         <div>
             {showLoading && <div><h2>Loading...</h2></div>}
         </div>

         <div>
             {noMovieStatus && <div><h2>No movies found...</h2></div>}
         </div>

         <div className="movieDisplay">
             {
                 ((movies !== undefined) &&(movies.length > 0))  ? movies.map((movie) => 
                 <Moviegrid data={movie} key={movie.id}/>) : null
             }
         </div>

       </>
    )
}

export default Movie;
