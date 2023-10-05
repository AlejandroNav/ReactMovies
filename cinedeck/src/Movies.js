import Cards from "./Cards"

function Movies({ titles }) {
    console.log(titles);
    return (
        <div>
            <h1>Peliculas:</h1>
            {titles && titles.map((movie, index) => (
                <Cards key={index} titleMovie={movie.title} dateMovie={movie.date} />
            ))}
        </div>
    );
}

export default Movies;