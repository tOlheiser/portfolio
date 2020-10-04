import { Link } from "gatsby"
import React from "react"
import navLogo from "../assets/navLogo.svg"
import style from "../pages/contact.module.css"
import Button from "./button"

const Contact = () => ( 
    <div className={style.sectionContainer}> {/* Section Container - Max width and c
    entered in 100vh container*/}
        <div className={style.contentContainer}> {/* Section Title + Content */}
            <h2 className={style.subHeading}>Get in touch</h2>
            <h1 className={style.sectionHeading}>Contact Me</h1>
            <p>I'd be happy to discuss what I can do for you.</p>
            <Button content="Say Hello"/>
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
        </div>
    </div>
)

export default Contact
    