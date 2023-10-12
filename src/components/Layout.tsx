import { Outlet } from 'react-router-dom';

import Header from "./Header"

const Layout = () => {
    
    //TODO: example of error
    //(null).toString();

    // As result we get: 
    //Oops!
    //Sorry, something went wrong
    //Cannot read properties of null (reading 'toString')

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Layout;