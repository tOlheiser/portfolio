import { Link } from "gatsby"
import React from "react"
import navLogo from "../assets/navLogo.svg"
import Button from "./button"
import PropTypes from 'prop-types';

/*
.sectionContainer {
    display: flex;
    width: 960px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid red;
}

.sectionHeading {
    font-family: 'Source Sans Pro', serif;
    font-size: 60px;
    line-height: 50px;
    color: #CCD6F6;
}

.subHeading {
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
    line-height: 17.6px;
    color: #64FFDA;
}
*/

const Contact = () => ( 
    <div> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div> {/* Section Title + Content */}
            <h2>Get in touch</h2>
            <h1>Contact Me</h1>
            <p>I'd be happy to discuss what I can do for you.</p>
            <Button content="Say Hello"/>
        </div>
        
    </div>
)

export default Contact
    