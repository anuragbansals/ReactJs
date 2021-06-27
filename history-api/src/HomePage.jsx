import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to ="/game">Let's play a game</Link>
        </div>
    )
}
