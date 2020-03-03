import React from 'react'
import './works.css'
import PageTitle from '../PageTitle/PageTitle'
import PageTitleSmall from '../PageTitleSmall/PageTitleSmall'
import Portfolio from '../Portfolio/Portfolio'
import portfolioData from '../Portfolio/portfolioData'


const Works = () => {
    const portfolioComponent = portfolioData.map(portfolio =>
        <Portfolio key={portfolio.id}
            img={portfolio.img}

        />)

    return (
        <section className="container">
            <div className="works">
                <PageTitleSmall text="PORTFOLIO" type="main" />
                <PageTitle text="Creative Works." type="main" />
                <div className="portfolio-div">
                    {portfolioComponent}
                </div>
            </div>
        </section>
    )
}
export default Works