import React from 'react'
import './name.css'

const Name = (props) => {
    const navName = `name-${props.type}`
    return (
        <h1 className={navName}>Usun<span className="nav-dot">.</span></h1>
    )
}

export default Name