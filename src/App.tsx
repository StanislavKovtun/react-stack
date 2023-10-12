import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//import Header from './components/Header';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<About />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;