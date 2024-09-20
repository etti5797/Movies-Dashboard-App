Movie Dashboard App

This React-based web application allows users to search for movies using the OMDB API and manage a list of their favorite movies. Users can search for movies, view movie posters, and toggle between a "Movies" view and a "Favorites" view. The favorites are stored locally using localStorage, ensuring they persist across browser sessions.


Features:

-Search for Movies: Search movies by title using the OMDB API.

-Favorites Management: Add or remove movies from your favorites list.

-Persistent Storage: Favorites are saved to localStorage so they remain available even after refreshing the page.

-Toggle Between Views: Switch between the movies list and favorites list.


Components:

App: The main component managing state and rendering the movie search, list, and favorites.

MovieList: Displays the list of movies with their posters and favorite icons.

FavoriteComponent: Handles the toggle logic for adding/removing favorites.

SearchMovies: The input field to search for movies.



this project helped me practice useState, useEffect, and Props.
