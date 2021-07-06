import React from 'react'
// import './square.css'

const Square = (props) => {
    return (
        <button type="button" className="square">{props.value}</button>
    )
}

export default Square
