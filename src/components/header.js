import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import navLogo from "../assets/navLogo.svg"
import style from "../pages/header.module.css"
import Button from "./button"

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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
