import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const store = useSelector(state => state)

    return (
        <div>
            <h1>${store}</h1>
        </div>
    )
}

export default Balance