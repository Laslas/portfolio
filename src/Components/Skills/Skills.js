import React from 'react'
import './skills.css'

const Skills = (props) => {
    return (
        <ul className="service-ul">
            <li className="service-svg">{props.img}</li>
            <li className="service-title">{props.title}</li>
        </ul>
    )
}


export default Skills