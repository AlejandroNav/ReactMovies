import React, { useState } from 'react';
function Options({ onSetMovies }) {
    const [id, setId] = useState('');
    const API_KEY = '96706b0f33b454df6da0561912cd7362'

    function findMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener la película');
                }
                return response.json();
            })
            .then(data => {
                const movieData = {
                    title: data.title,
                    date: data.release_date
                };
                onSetMovies([movieData]);
            })
            .catch(error => {
                console.error("Hubo un error al buscar la película:", error);
                onSetMovies([]);
            });
    }
    function fetchPopularMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener las películas populares');
                }
                return response.json();
            })
            .then(data => {
                const movies = data.results.slice(0, 10).map(movie => ({
                    title: movie.title,
                    date: movie.release_date
                }));
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Hubo un error al buscar las películas populares:", error);
                onSetMovies([]);
            });
    }
    return (
        <div>
            <button onClick={fetchPopularMovies}>Traer 10 películas populares</button>
            <input
                type='text'
                placeholder="Ingresa el ID de la película"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button onClick={findMovie}>Buscar por id</button>
        </div>
    );
}

export default Options;