import React from 'react'
import './button.css'

const Button = (props) => {
    return (
        <button className="btn">
            {props.label}
        </button>
    )
}

export default Button