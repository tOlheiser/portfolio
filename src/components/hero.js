//import { Link } from "gatsby"
import React from "react"
import style from "../pages/hero.module.css"

const Hero = () => (
    <div className={style.heroDiv}>
        <h2 className={style.subheading}>Hi, my name is</h2>
        <h1 className={style.nameHeading}>Tanner Olheiser.</h1>
        <h1 className={style.tagline}>I build things for the web.</h1>
        <p className={style.contentType}>I'm a fullstack developer based in Regina, SK specializing in building exceptional web applications using React, Express, Node, and MongoDB.</p>
        <button className={style.button}>Get in Touch</button>
    </div>
)

export default Hero