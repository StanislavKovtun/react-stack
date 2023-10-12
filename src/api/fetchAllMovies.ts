//const movies = [
//    {
//        name: 'Film name 1',
//        duration: 150,
//        id: 1,
//    },
//    {
//        name: 'Film name 2',
//        duration: 200,
//        id: 2,
//    },
//    {
//        name: 'Film name 3',
//        duration: 250,
//        id: 3,
//    }
//]

import data from './movies.json';

export default function fetchAllMovies() {
    return new Promise((res) => {
        setTimeout(
            () => res(data), 2000
        );
    })
}