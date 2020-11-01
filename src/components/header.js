// 1. Set up Media Queries - "When do I display hamburger button?"
// 2. Get the hamburger menu set up
// 3. Reveal Nav when I scroll up - "Transparent BG + Transform"
// 4. Polish the positioning of the elements.
// 5. Place them in <a> tags & give hover effects.
// 6. Figure out how to animate them on-load.
// NEXT: Get the Social Icons & Email sidebars setup.

import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import navLogo from "../assets/navLogo.svg"
import styles from "../pages/header.module.css"
import Button from "./button"
import Burger from "./burger"
import Menu from "./menu"
import { useOnClickOutside } from '../hooks'

const useViewport = () => {
  // Declare the viewport width, and a method to update its state.
  const [viewportWidth, setWidth] = React.useState(window.innerWidth);

  // useEffect hook listens for changes in the width of the window
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    // When the window resizes, update the viewportWidth's state.
    window.addEventListener("resize", handleWindowResize);
    // returns a function from the effect that removes the event listener, freeing up memory when the component unmounts 
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  // Passing an empty array as the dependencies of the effect causes the effect only to run when the component mounts -> NOT each time it updates 

  return { viewportWidth };
} 

const Header = () => {
  // Open/Close state for hamburger menu
  const [open, setOpen] = useState(false); // initial state = false
  const node = React.useRef();
  const { viewportWidth } = useViewport();
  const breakpoint = 620;
  useOnClickOutside(node, () => setOpen(false));

  return(
    <header className={styles.headerDiv}>
      
      {/* Logo Container */}
      <div className={styles.logo}> {/*stylesheet.logo */}
          <Link to="/">
            <img src={navLogo} alt="Tanner Olheiser's Logo" height="60px" />
          </Link>
      </div>

      {viewportWidth < breakpoint ? 
        
        <div ref={node} className={styles.hideOverflow}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        :
        
        <ul className={styles.child}>
          <li>Work</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <Button content="Resume" />
          </li>
        </ul>
      }
    </header>
  )
}
    
export default Header