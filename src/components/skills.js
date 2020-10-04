import React from "react"
import style from "../pages/about.module.css"

const About = () => ( 
    <div className={style.sectionContainer}> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div className={style.contentContainer}> {/* Section Title + Content */}
            <h2 className={style.subHeading}>Technologies I use</h2>
            <h1 className={style.sectionHeading}>My Skills</h1>
        </div>
        <div className={style.skillSection}>{/* Work section */}
            <div className={style.skillCard}>{/* Project Card Container */}
                <div className={style.skillIcon}></div>
                <div className={style.skillContent}></div>
            </div>

            <div className={style.skillCard}>{/* Project Card Container */}
                <div className={style.skillIcon}></div>
                <div className={style.skillContent}></div>
            </div>

            <div className={style.skillCard}>{/* Project Card Container */}
                <div className={style.skillIcon}></div>
                <div className={style.skillContent}></div>
            </div>
        </div>
    </div>
)

export default About
