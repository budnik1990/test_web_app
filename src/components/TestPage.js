import React from 'react'
import { Link } from 'react-router-dom'

export const TestPage = () => {
    return (
        <>
            <div>TestPage</div>
            <Link to="/login">Login</Link>
        </>
    )
}
