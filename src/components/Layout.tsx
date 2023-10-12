import { Outlet, useNavigation } from 'react-router-dom';

import Header from "./Header"

const Layout = () => {

    //TODO: example of error
    //(null).toString();

    // As result we get: 
    //Oops!
    //Sorry, something went wrong
    //Cannot read properties of null (reading 'toString')

    //const { state } = useNavigation();
    // console.log('### state', state);
    // TODO: loading here doesn`t working!? (state !== 'loading')

    return (
        <>
            {/*{state === 'loading' ? <div>Loading...</div> : null}*/}
            <>
                <Header />
                <Outlet />
                {/*{children} // TODO: add children? */}
            </>
        </>
    )
};

export default Layout;