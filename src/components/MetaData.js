import React from 'react'
import {Helmet} from "react-helmet";
const MetaData = (props) => {
    return (
             <Helmet>
     <title>Flykite | {props.title} </title>
    <meta name="description"  property="og:description"  content={props.description} />
            </Helmet>

    )
}

export default MetaData
