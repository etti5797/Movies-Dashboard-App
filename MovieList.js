
import React from 'react';
import FavoriteComponent from './FavoriteComponent.js';

function MovieList(props)
{
    const movies = props.movies
    return (
        <>
            {movies.map((movie, index) => (
                <div className='image-container'>
                    <img src={movie.Poster} alt={`${movie.Title} poster unavailable`}></img>
                    <div className='add-movie-to-favorites'>
                        <FavoriteComponent 
                            movie={movie}
                            removeFromFavorites={props.removeFromFavorites}
                            addToFavorites = {props.addToFavorites}
                            favourites={props.favourites}/>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MovieList;