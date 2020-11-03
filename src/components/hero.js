//import { Link } from "gatsby"
import React from "react";

/*
.heroDiv {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 960px;
    max-width: 960px;
    margin: 0 3em 9em 3em;
    align-self: center;
    justify-content: center;
    border: 2px solid green;
}

.subheading {
    font-family: 'Source Code Pro', sans-serif;
    font-size: 16px;
    line-height: 17.6px;
    color: #64FFDA;
}

.nameHeading {
    font-family: 'Source Sans Pro', serif;
    font-size: 80px;
    line-height: 88px;
    color: #CCD6F6;
}

.tagline {
    font-family: 'Source Sans Pro', serif;
    font-size: 80px;
    line-height: 72px;
    color: #8892B0;
}

.contentType {
    font-family: 'Source Sans Pro', serif;
    font-size: 20px;
    line-height: 26px;
    color: #8892B0;
    max-width: 600px;
}

button {
    border: 1px solid #64ffDA;
    border-radius: .3em;
    padding: 1rem 1.5rem;
    margin: 0;
    background: transparent;
    color: #64ffDA;
    line-height: 14px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

button:hover,
button:focus {
    background: rgba(100, 255, 218, .12);
    
}

button:focus {
    outline: none;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}

.button {
    font-family: 'Source Code Pro', sans-serif;
    font-size: 14px;
    line-height: 14px;
    align-self: flex-start;
    margin-top: 1.5em;
}
Source Code Pro or Cousine
PT Mono looks awful as my nav link font.
PT Mono: Feels a little fuzzy. A lighter weight might be nicer. */

const Hero = () => (
    <div>
        <h2>Hi, my name is</h2>
        <h1>Tanner Olheiser.</h1>
        <h1>I build things for the web.</h1>
        <p>I'm a fullstack developer based in Regina, SK specializing in building exceptional web applications using React, Express, Node, and MongoDB.</p>
        <button>Get in Touch</button>
    </div>
)

export default Hero