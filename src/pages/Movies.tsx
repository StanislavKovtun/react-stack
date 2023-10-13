import { NavLink, useNavigation } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function Movies() {

    //TODO: add dynamic movies!

    const { state } = useNavigation();
    //console.log('### state', state);

    const movies = useLoaderData() as {id: string, name: string}[];
    //console.log('### movies', movies);

    return (
        <>
            {/*{state === 'loading' ? <div>Loading...</div> : null}*/}
            <h1 className='p-2'>Movies</h1>
            <ul className="w-4 my-10">
                {movies.map((movie) =>
                    <li key={movie.id}>{movie.name + '. '}
                        <NavLink to={`/movies/${movie.id}`}>Show detail {state}</NavLink>
                    </li>)}
            </ul>
        </>
    )
}

export default Movies;