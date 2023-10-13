import { NavLink, useNavigation } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function Movies() {

    //TODO: add dynamic movies!

    const { state } = useNavigation();
    //console.log('### state', state);

    const movies = useLoaderData() as { id: string, name: string }[];
    //console.log('### movies', movies);

    return (
        <>
            {/*{state === 'loading' ? <div>Loading...</div> : null}*/}
            <h1 className='p-2'>Movies</h1>
            <div>
                <ul className="w-60 my-10 m-auto">
                    {movies.map((movie) =>
                        <li key={movie.id} className="pb-2">{movie.name + '. '}
                            <NavLink to={`/movies/${movie.id}`}>Show detail</NavLink>
                        </li>)}
                </ul>
            </div>
        </>
    )
}

export default Movies;