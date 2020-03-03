import React from 'react'
import './navbar.css'
import Name from '../Name/Name'

const Navbar = () => {
    return (
        <div className="nav-div ">
            <Name type="primary" />
            <ul className="nav-ul">
                <li className="nav-li">Home</li>
                <li className="nav-li">About</li>
                <li className="nav-li">Services</li>
                <li className="nav-li">Works</li>
                <li className="nav-li">News</li>
                <li className="nav-li">Contact</li>
            </ul>
        </div>
    )
}





export default Navbar