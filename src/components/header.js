import { Link } from "gatsby"
import React from "react"
import navLogo from "../assets/navLogo.svg"
import style from "../pages/header.module.css"
import Button from "./button"

// 1. Set up Media Queries - "When do I display hamburger button?"
// 2. Get the hamburger menu set up
// 3. Reveal Nav when I scroll up - "Transparent BG + Transform"
// 4. Polish the positioning of the elements.
// 5. Place them in <a> tags & give hover effects.
// 6. Figure out how to animate them on-load.
// NEXT: Get the Social Icons & Email sidebars setup.

/* 
--> Mobile Styles
--> @media (min-width: INSERT PX HERE) {...} (tablet + desktop styles & up)

*/

const Header = () => ( // removed siteTitle props
  <header className={style.headerDiv}>
    
    {/* Logo Container */}
    <div className={style.logo}> 
        <Link to="/">
          <img src={navLogo} alt="Tanner Olheiser's Logo" height="60px" />
        </Link>
    </div>

    {/* Link Container */}
    <div className={style.linkDiv}>
      <ul className={style.child}>
        <li>Work</li>
        <li>Skills</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Button content="Resume" />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
