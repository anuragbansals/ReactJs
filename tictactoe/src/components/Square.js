import React from 'react'
import './square.css'

const Square = (props) => {
    return (
        <button type="button" className="btn">{props.value}</button>
    )
}

export default Square
