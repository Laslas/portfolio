import React from 'react'
import './about.css'
import PageTitle from '../PageTitle/PageTitle'
import Social from '../Social/Social'

const About = () => {
    return (
        <section className="container">
            <div className="about">
                <PageTitle text="About Me." type="about" />
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-box">Lorem ipsum dolor, <span className="about-span">sit amet consectetur adipisicing </span> elit. Aliquid vel reprehenderit animi cumque deleniti incidunt porro qui voluptatibus voluptate. Dolorum ad sint optio sed aspernatur nam, incidunt quia eveniet laborum!</div>

                        <div className="check-div">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 11.522l1.578-1.626 7.734 4.619 13.335-12.526 1.353 1.354-14 18.646z" /></svg>
                            <p className="">Available for new projects</p>
                        </div>

                        <Social type="primary" />
                    </div>
                    <div className="about-ul-div">
                        <ul className="about-ul">
                            <li className="about-li">Design</li>
                            <li className="about-li">Web Design</li>
                            <li className="about-li">Prototyping</li>
                            <li className="about-li">Branding</li>
                            <li className="about-li">illustration</li>
                        </ul>
                        <ul className="about-ul">
                            <li className="about-li">Development</li>
                            <li className="about-li">Websites</li>
                            <li className="about-li">Native Apps</li>
                            <li className="about-li">WordPress</li>
                            <li className="about-li">eCommerce</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}



export default About