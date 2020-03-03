import React from 'react'
import './contact.css'
import PageTitle from '../PageTitle/PageTitle'
import PageTitleSmall from '../PageTitleSmall/PageTitleSmall'
import Button from '../Button/Button'

const Contact = () => {

    return (
        <section className="clear">
            <div className="container">
                <div className="contact">
                    <PageTitle text="Do you like my work?" type="main" />
                    <PageTitleSmall text="Let's work together!" type="contact" />
                    <Button label="Get in touch" />
                </div>
            </div>
        </section>
    )
}

export default Contact