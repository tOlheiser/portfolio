import React from "react";
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

.contentContainer {
    padding-left: 3em;
    padding-right: 3em;
}

.skillSection {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: 2px solid blue;
    max-width: 960px;
    width: 960px;
    justify-content: space-between;
}

.skillCard {
    display: flex;
    flex-direction: column;
    padding: 1em;
}

.skillCard:first-of-type {
    padding-left: 0;
}

.skillCard:last-of-type {
    padding-right: 0;
}


.skillIcon {
    width: 270px;
    height: 340px;
    background-color: #CCD6F6;
    border: 2px solid yellow;
}

.skillIcon:first-child {
    padding-left: 0;
}

.skillContent {

}

.sectionHeading {
    font-family: 'Source Sans Pro', sans-serif;
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

p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    line-height: 26px;
    color: #8892B0;
}
*/
const Skills = () => ( 
    <div> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div> {/* Section Title + Content */}
            <h2>Technologies I use</h2>
            <h1>My Skills</h1>
        </div>
        <div>{/* Work section */}
            <div>{/* Project Card Container */}
                <div></div>
                <div></div>
            </div>

            <div>{/* Project Card Container */}
                <div></div>
                <div></div>
            </div>

            <div>{/* Project Card Container */}
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
)

export default Skills
