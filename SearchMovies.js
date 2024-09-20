import React from 'react';

function SearchMovies(props) {

    function handleSearch(e){
        props.setSearchValue(e.target.value);
    }
    return (
        <div className='col'>
            <input className='search-control'
            placeholder='Type a movie title...'
            onChange={(e)=> handleSearch(e)}>
            </input>
        </div>
    );
}

export default SearchMovies;