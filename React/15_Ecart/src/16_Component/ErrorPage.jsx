import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {

    let { error, status, statusText } = useRouteError();
    return (
        <div>
            <h1>{error.message}</h1>
            <h2>{status}</h2>
            <h1>{statusText}</h1>

            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/" className='bg-blue-600 '>Go to Home</Link>
                </li>
            </ul>

        </div>

    )
}

export default ErrorPage