import { useLoaderData, useParams } from "react-router-dom";

function Movie() {

    const { movieId } = useParams();
    console.log('### movieId', movieId);

    //const {name, duration, id} = useLoaderData();
    const { name, duration } = useLoaderData(); //TODO: need to study!
    //useLoaderData() - get data from this component or from first parent component

    return (
        <>
            <h1>Movie</h1>
            <p>ID: {movieId}</p>
            <p>Name: {name}</p>
            <p>Duration: {duration}</p>
        </>
    )
}

export default Movie;