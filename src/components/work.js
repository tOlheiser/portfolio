/*import React from "react"
import styles from "../pages/work.module.css"

const Work = () => ((
    <div>
        <p>Harry Potter</p>
    </div>

)

    
)*/

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import navLogo from "../assets/navLogo.svg"
import style from "../pages/work.module.css"
import Button from "./button"

const Work = () => ( 
    <div className={style.sectionContainer}> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div className={style.contentContainer}> {/* Section Title + Content */}
            <h2 className={style.subHeading}>See what I've done</h2>
            <h1 className={style.sectionHeading}>Projects</h1>
        </div>
        <div className={style.workSection}>{/* Work section */}
            <div className={style.cardContainer}>{/* Project Card Container */}
                <div className={style.projectPhoto}></div>
                <div className={style.projectDescription}></div>
            </div>

            <div className={style.cardContainer}>{/* Project Card Container */}
                <div className={style.projectPhoto}></div>
                <div className={style.projectDescription}></div>
            </div>
            <div className={style.cardContainer}>{/* Project Card Container */}
                <div className={style.projectPhoto}></div>
                <div className={style.projectDescription}></div>
            </div>
            <div className={style.cardContainer}>{/* Project Card Container */}
                <div className={style.projectPhoto}></div>
                <div className={style.projectDescription}></div>
            </div>
            <div className={style.cardContainer}>{/* Project Card Container */}
                <div className={style.projectPhoto}></div>
                <div className={style.projectDescription}></div>
            </div>
            <div className={style.cardContainer}>{/* Project Card Container */}
                <div className={style.projectPhoto}></div>
                <div className={style.projectDescription}></div>
            </div>
        </div>
    </div>
)

export default Work
