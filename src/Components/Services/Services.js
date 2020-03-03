import React from 'react'
import './services.css'
import PageTitle from '../PageTitle/PageTitle'
import PageTitleSmall from '../PageTitleSmall/PageTitleSmall'
import Skills from '../Skills/Skills'
import skillsData from '../Skills/skillsData'

const Services = (props) => {
    const skillsComponents = skillsData.map(skill =>
        <Skills key={skill.id}
            img={skill.img} title={skill.title}

        />)

    return (
        <section className="container">
            <div className="services">
                <PageTitleSmall text="WHAT I DO" type="main" />
                <PageTitle text="Services." type="main" />
                <div className="skills-div">
                    {skillsComponents}
                </div>
            </div>
        </section>
    )
}



export default Services