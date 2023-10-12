import { Outlet, useNavigation } from 'react-router-dom';

import Header from "./Header"

const Layout = () => {

    //TODO: example of error
    //(null).toString();

    // As result we get: 
    //Oops!
    //Sorry, something went wrong
    //Cannot read properties of null (reading 'toString')

    const { state } = useNavigation();

    return (
        <>
            <>
                <Header />
                {state === 'loading' ? <div>Loading...</div> : null}
                {/*<p>{state}</p>*/}
                <Outlet />
                {/*{children} // TODO: add children? */}
            </>
        </>
    )
};

export default Layout;