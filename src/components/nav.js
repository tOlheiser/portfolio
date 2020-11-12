// 1. Set up Media Queries - "When do I display hamburger button?"
// 2. Get the hamburger menu set up
// 3. Reveal Nav when I scroll up - "Transparent BG + Transform"
// 4. Polish the positioning of the elements.
// 5. Place them in <a> tags & give hover effects.
// 6. Figure out how to animate them on-load.
// NEXT: Get the Social Icons & Email sidebars setup.
/* ! The amount of space between the sidebars and the edge of the screen 
should be the same for the logo & nav links. */

import React, { useState, useRef } from "react"
import StyledButton from "./button"
import Burger from "./burger"
import Menu from "./menu"
import useOnClickOutside from '../hooks/useOnClickOutside'
import styled from 'styled-components'
import useViewport from '../hooks/useViewport'
import Icon from './icons/icon'
import resume from "../../public/static/resume.pdf"
import Headroom from 'react-headroom'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  padding: 20px 50px;

  @media screen and (max-width: 620px) {
    padding: 20px 30px;
  }
`

const StyledLogo = styled.div`
  svg {
    width: auto;
    height: 60px;
    fill: ${props => props.theme.main};

    &:hover, &:focus {
      cursor: pointer;

      .cls-1, .cls-2 {
        fill: ${props => props.theme.primaryLight};
        cursor: pointer;
      }
    }
  }
`

const StyledUnorderedList = styled.ul`
  display: flex;
  
  li:not(:last-child) {
    color: ${props => props.theme.primaryLight};
    font-family: 'Source Code Pro', monospace;
    font-size: ${props => props.theme.xs};
    display: flex;
    align-items: center;
    margin-right: 1.6em; 

    &:last-child {
      margin-right: 0;
    }   
  }

  a {
    /* Hover effect from https://paulund.co.uk/css-animation-link-underline */
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: ${props => props.theme.main};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }

    &:hover:before, &:focus:before {
      visibility: visible;
      transform: scaleX(1);
    }

    &:hover, &:focus {
      color: ${props => props.theme.main};
      cursor: pointer;
      outline: 0;
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
    <div>
    <Headroom>
    <StyledNav>
      {/* Logo Container */}
      
      <StyledLogo> {/*stylesheet.logo */}
            <Icon name="Logo"/>
      </StyledLogo>
      

      {viewportWidth < breakpoint ? 
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        :
        <StyledUnorderedList>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a 
              rel="noopener noreferrer"
              href={resume} 
              target="_blank"><StyledButton>Resume</StyledButton></a>  
          </li>
        </StyledUnorderedList>
      }
      
    </StyledNav>
    </Headroom>
    </div>
  )
}
    
export default Nav