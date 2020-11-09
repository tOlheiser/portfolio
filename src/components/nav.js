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
import StyledButton from "./button"
import Burger from "./burger"
import Menu from "./menu"
import useOnClickOutside from '../hooks/useOnClickOutside'
import styled from 'styled-components'
import useViewport from '../hooks/useViewport'

const StyledNav = styled.nav`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  padding: 0 40px;
`

const StyledLogo = styled.div`
  @media screen and (max-width: 620px) {
    padding-left: 30px
  }
`

const StyledUnorderedList = styled.ul`
  display: flex;
  
  li {
    color: #CCD6F6;
    font-family: 'Source Code Pro', monospace;
    font-size: ${props => props.theme.xs}; /* 14px */
    display: flex;
    align-items: center;
    padding-right: 1.6em; 
    &:last-child {
      padding-right: 0;
    }   
  }
`

const Nav = () => {
  // Open/Close state for hamburger menu
  const [open, setOpen] = useState(false); // initial state = false
  const node = useRef();
  const { viewportWidth } = useViewport();
  const breakpoint = 620;
  useOnClickOutside(node, () => setOpen(false));

  return(
    <StyledNav>
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
            <StyledButton>Resume</StyledButton>
          </li>
        </StyledUnorderedList>
      }
    </StyledNav>
  )
}
    
export default Nav