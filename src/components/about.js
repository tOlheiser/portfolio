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

const About = () => ( 
    <div> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div> {/* Section Heading */}
            <h2>Introductions</h2>
            <h1><span>About</span> Me</h1> {/* Accent color on 'About' */}
        </div>
        <div>{/* Section Content */}
            <div>{/* Project Card Container */}
                <p>Hi there! My name's Tanner, and I'm an aspiring fullstack developer currently living in Regina, SK.

                <br/><br/>What I really love about fullstack development is that I have the skills to bring ideas & dreams into reality. It brings me pride to know how everything works, from the design process, to how the front-end brings your pages to life, and how the back-end delivers those pages to the user.

                <br/><br/>My ambition is to continue to expand on my skillset and apply it in an environment where I'm doing interesting, meaningful work on a daily basis.</p>
            </div>

            <div>{/* Project Card Container */}
                {/* Image here*/}
            </div>
        </div>
    </div>
)

export default About
