import data from './movies.json';

export function fetchMovieById(id: string) {
    return data.find((el) => el.id === id) || {id: '0', name: '-', duration: '-'};
}

