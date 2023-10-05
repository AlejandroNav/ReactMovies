import Cards from "./Cards"
import './Movies.css'
function Movies({ titles }) {
    console.log(titles);
    return (
        <div>
            <h1>Peliculas:</h1>
            <div className="Movies-cards">
            {titles && titles.map((movie, index) => (
                <Cards key={index} titleMovie={movie.title} dateMovie={movie.date} />
            ))}
            </div>
        </div>
    );
}

export default Movies;