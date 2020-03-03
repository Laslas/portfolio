import React from 'react'
import './pagetitle.css'

const PageTitle = (props) => {
    const pageTitle = `pageTitle-large-${props.type}`

    return (

        <h1 className={pageTitle}>{props.text}</h1>
    )
}





export default PageTitle