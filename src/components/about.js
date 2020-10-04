import React from "react"
import style from "../pages/about.module.css"

const About = () => ( 
    <div className={style.sectionContainer}> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div className={style.contentContainer}> {/* Section Heading */}
            <h2 className={style.subHeading}>Introductions</h2>
            <h1 className={style.sectionHeading}><span className={style.accent}>About</span> Me</h1>
        </div>
        <div className={style.skillSection}>{/* Section Content */}
            <div className={style.skillCard}>{/* Project Card Container */}
                <p>Hi there! My name's Tanner, and I'm an aspiring fullstack developer currently living in Regina, SK.

                <br/><br/>What I really love about fullstack development is that I have the skills to bring ideas & dreams into reality. It brings me pride to know how everything works, from the design process, to how the front-end brings your pages to life, and how the back-end delivers those pages to the user.

                <br/><br/>My ambition is to continue to expand on my skillset and apply it in an environment where I'm doing interesting, meaningful work on a daily basis.</p>
            </div>

            <div className={style.skillCard}>{/* Project Card Container */}
                {/* Image here*/}
            </div>
        </div>
    </div>
)

export default About
