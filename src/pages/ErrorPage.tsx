import { useRouteError } from "react-router-dom";

function ErrorPage() {
    //const error = useRouteError();
    return (
        <>
            <h1>Oops!</h1>
            <p>Someting went wrong</p>
        </>
    )
}

export default ErrorPage;