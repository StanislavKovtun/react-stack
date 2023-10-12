import { useParams } from "react-router-dom";
import { fetchMovieById } from "../api/fetchMovieById";

function Movie() {

    const { movieId } = useParams();
    console.log('### movieId', movieId);
    const movie = fetchMovieById(movieId);
    console.log('### movie', movie);
        
    return (
        <>
            <h1>Movie</h1>
            <p>ID: {movieId}</p>
            <p>Name: {movie.name}</p>
            <p>Duration: {movie.duration}</p>
        </>
    )
}

export default Movie;