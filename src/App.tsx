import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import Loader from './components/Loader';
import fetchAllMovies from './api/fetchAllMovies';

import './App.css';

export const routes = {
    home: 'home',
    about: 'about',
    contacts: 'contacts',
    movies: 'movies',
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage/>}>
            <Route index element={<Home />} />
            <Route path={routes.contacts} element={<Contacts />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.movies} element={<Movies />} loader={fetchAllMovies}/>
            <Route path={`/${routes.movies}/:movieId`} element={<Movie />}/>
            {/*<Route path='*' element={<ErrorPage />} />*/}
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} fallbackElement={<Loader/>} />
        //<RouterProvider router={router} />
    );
}

export default App;