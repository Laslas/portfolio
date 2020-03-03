import React from 'react'
import './portfolio.css'

const Portfolio = (props) => {
    return (
        <ul className="works-ul">
            <li className="works-img">{props.img}</li>

        </ul>
    )
}


export default Portfolio