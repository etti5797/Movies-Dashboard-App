
import React, { useState, useEffect } from 'react';
function FavoriteComponent(props) {
  const movie = props.movie;

  const [isFavorited, setIsFavorited] = useState(false);
  const [msg, setMsg] = useState('Add to Favourites');

  // Sync isFavorited with props.favourites
  useEffect(() => {
    const isFav = props.favourites.some(favMovie => favMovie.imdbID === movie.imdbID);
    setIsFavorited(isFav);
    setMsg(isFav ? 'Remove from Favourites' : 'Add to Favourites');
  }, [props.favourites, movie.imdbID]);

  

  function toggleFavorite() {
    if (isFavorited) {
      props.removeFromFavorites(movie);
      setMsg('Add to Favourites');
    } else {
      props.addToFavorites(movie);
      setMsg('Remove from Favourites');
    }
    setIsFavorited(!isFavorited);
  }

  
  return (
    <div onClick={toggleFavorite} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        <span>{msg}</span>
        {isFavorited ? (
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-heart-fill'
                fill='red'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                />
            </svg>
        ) : (
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-heart'
                fill='none'
                stroke='red'
                strokeWidth='1.5'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    d='M8 1.314C3.563-3.248-7.534 4.735 8 15 23.534 4.736 12.438-3.248 8 1.314z'
                />
            </svg>
        )}
    </div>
);
};

export default FavoriteComponent;