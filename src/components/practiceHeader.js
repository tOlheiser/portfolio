import { Link } from "gatsby"
import React from "react"
import navLogo from "../assets/navLogo.svg"
import stylesheet from "../pages/header.module.css"
import Button from "./button"
import Menu from 'react-burger-menu/lib/menus/slide'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

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







//const Header = () => ( // removed siteTitle props
class Header extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return(
  <header className={stylesheet.headerDiv}>
    
    {/* Logo Container */}
    <div className={stylesheet.logo}> 
        <Link to="/">
          <img src={navLogo} alt="Tanner Olheiser's Logo" height="60px" />
        </Link>
    </div>

    {/* Link Container */}
    {/*<div className={style.linkDiv}>*/}

      <Menu right styles={styles}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>

    {/* Regular Nav
      <ul className={styles.child}>
        <li>Work</li>
        <li>Skills</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Button content="Resume" />
        </li>
      </ul>
    */}
    {/*</div>*/}
  </header>
//)
    )}}
    
export default Header
