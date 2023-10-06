import Cards from "./Cards"
import './Movies.css'
function Movies({ titles, currentPage, setCurrentPage }) {
    console.log(titles);
    const moviesPerPage = 6;
    const totalPages = Math.ceil(titles.length / moviesPerPage)

    const diplayedMovies = titles.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)

    return (
        <div>
            <h1>Peliculas:</h1>
            <div className="Movies-cards">
                {diplayedMovies.map((movie, index) => (
                    <Cards key={index} titleMovie={movie.title} dateMovie={movie.date} />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage===index+1 ? 'active': ''}
                    >
                        {index+1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Movies;