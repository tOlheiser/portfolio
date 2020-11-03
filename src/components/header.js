// 1. Set up Media Queries - "When do I display hamburger button?"
// 2. Get the hamburger menu set up
// 3. Reveal Nav when I scroll up - "Transparent BG + Transform"
// 4. Polish the positioning of the elements.
// 5. Place them in <a> tags & give hover effects.
// 6. Figure out how to animate them on-load.
// NEXT: Get the Social Icons & Email sidebars setup.
/* ! The amount of space between the sidebars and the edge of the screen 
should be the same for the logo & nav links. */

import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import navLogo from "../assets/navLogo.svg"
import Button from "./button"
import Burger from "./burger"
import Menu from "./menu"
import useOnClickOutside from '../hooks/useOnClickOutside'
import styled from 'styled-components'
import useViewport from '../hooks/useViewport'

const StyledHeader = styled.header`
  background-color: #2C2A3C;
  /*margin-bottom: 1rem;*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  justify-self: flex-start;
`

const StyledLogo = styled.div`
  /*margin: 0 auto;*/
  padding-left: 3em;
  padding-top: 1.5em;
`

const StyledUnorderedList = styled.ul`
  color: #fff;
  display: flex;
  
  li {
    color: #CCD6F6;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 1.6em; 
    &:last-child {
      padding-right: 3em;
    }   
  }

`

const Header = () => {
  // Open/Close state for hamburger menu
  const [open, setOpen] = useState(false); // initial state = false
  const node = useRef();
  const { viewportWidth } = useViewport();
  const breakpoint = 620;
  useOnClickOutside(node, () => setOpen(false));

  return(
    
    <StyledHeader>
      
      {/* Logo Container */}
      <StyledLogo> {/*stylesheet.logo */}
          <Link to="/">
            <img src={navLogo} alt="Tanner Olheiser's Logo" height="60px" />
          </Link>
      </StyledLogo>

      {viewportWidth < breakpoint ? 
        
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        :
        
        <StyledUnorderedList>
          <li>Work</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <Button content="Resume" />
          </li>
        </StyledUnorderedList>
      }
    </StyledHeader>
  )
}
    
export default Header