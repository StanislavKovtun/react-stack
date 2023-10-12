import React from 'react';
import { useRouteError } from "react-router-dom";

function ErrorPage(): React.JSX.Element {
    const error: any = useRouteError(); //TODO: type?
    return (
        <>
            <h1>Oops!</h1>
            <p>Sorry, something went wrong</p>
            <p>{error.statusText || error.message}</p>
        </>
    )
}

export default ErrorPage;