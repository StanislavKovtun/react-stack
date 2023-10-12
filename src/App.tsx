import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

import './App.css';

export const routes = {
    home: 'home',
    about: 'about',
    contacts: 'contacts',
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<NotFound/>}>
            <Route index element={<Home />} />
            <Route path={routes.contacts} element={<Contacts />} />
            <Route path={routes.about} element={<About />} />
            {/*<Route path='*' element={<NotFound />} />*/}
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;