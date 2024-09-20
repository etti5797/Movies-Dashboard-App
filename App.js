import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList.js';
import SearchMovies from './SearchMovies.js';

const App = () => {

    useEffect(() => {document.title = 'moviesApp'}, []);

    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('movies');
    const [searchValue, setSearchValue] = useState('spider man');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7aeced77`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const LocalFavourites = JSON.parse(
            localStorage.getItem('movie-app-favourites')
        );

        if(LocalFavourites)
            setFavourites(LocalFavourites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('movie-app-favourites', JSON.stringify(items));
    };

    function addToFavorites(movie){
        setFavourites((favourites) => {
            const updatedFavourites = [...favourites, movie];
            localStorage.setItem('movie-app-favourites', JSON.stringify(updatedFavourites));
            return updatedFavourites
        });
    }

    function removeFromFavorites(movie) {
        setFavourites((favourites) => {
            const newFavouritesList = favourites.filter(
                (favMovie) => favMovie.imdbID !== movie.imdbID
            );
            saveToLocalStorage(newFavouritesList);  // Update localStorage
            return newFavouritesList;  // Return the updated state
        });
    }


    return status === 'movies'? (
        <div className='movie-app-container'>
           <div className='header-container'>
            <button className='status-button' onClick={() => setStatus('favorites')}>Favorites</button>
            <h1>Movies</h1>
            <SearchMovies searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
                <MovieList movies={movies}
                            favourites={favourites}
                            removeFromFavorites={removeFromFavorites}
                            addToFavorites = {addToFavorites} />
            </div>
        </div>
    ):
    ( 
        <div className='movie-app-container'>
           <div className='header-container'>
           <button className='status-button' onClick={()=>setStatus('movies')}>Movies</button>
            <h1>Favorites</h1>
            </div>
            <div className='row'>
                <MovieList movies={favourites}
                            favourites={favourites}
                            removeFromFavorites={removeFromFavorites}
                            addToFavorites = {addToFavorites} />
            </div>
        </div>
       
    );
};

export default App;