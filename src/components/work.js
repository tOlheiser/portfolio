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
    font-size: 70px;
    line-height: 70px;
    color: #CCD6F6;
}

.subHeading {
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
    line-height: 17.6px;
    color: #64FFDA;
}

.accent {
    color: #64FFDA;
}

.cardContainer {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    margin-bottom: 2em;
}

.projectPhoto {
    width: 250px;
    height: 250px;
    background-color: #CCD6F6;
}

.projectDescription {
    width: 250px;
    height: 300px;
    background-color: aliceblue;
}

.workSection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
*/

import React from "react"
import Button from "./button"
import PropTypes from 'prop-types'

const Work = () => ( 
    <div> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div> {/* Section Title + Content */}
            <h2>See what I've done</h2>
            <h1>Projects</h1>
        </div>
        <div>{/* Work section */}
            <div>{/* Project Card Container */}
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
)

export default Work
