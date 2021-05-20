import React from 'react';
import './Moviegrid.css';
import MovieDetails from './MovieDetails';
//import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Moviegrid = ({data}) => {
   


    return (
        <div className="movie">
            <img src={data.poster_path ? IMG_API+data.poster_path : "https://images.unsplash.com/photo-1512070750041-b9479c107194?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt={data.title} />
            <div className="movie-info">
                <p>{data.title}</p>
                <span className="spacer"></span>
                <span>{data.vote_average}</span>
            </div>
              <Link data-testid="details-link" to={{pathname:"/details",
                       state:{ movieData:data}
                     }}><button className="detailsButton">Details</button></Link>
        </div>
    )
}

export default Moviegrid;
