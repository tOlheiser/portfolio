import React from 'react';
import styled from 'styled-components';
import StyledButton from "./button";
import resume from "../../public/static/resume.pdf"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.accentDark};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  

@media (max-width: 576px) {
  width: 100%;
}

a {
  font-size: 1.6rem;
  padding: 2rem 2.5rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.primaryLight};
  transition: color 0.3s linear;
  font-family: ${props => props.theme.monoFont};

  &:hover, &:focus {
    color: ${props => props.theme.main};
  }
}
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Projects
      </a>
      <a href="/">
        About
      </a>
      <a href="/">
        Skills
      </a>
      <a href="/">
        Contact
      </a>
      <a 
        rel="noopener noreferrer"
        href={resume} 
        target="_blank"><StyledButton>Resume</StyledButton>
      </a>  
    </StyledMenu>
  )
}

export default Menu;
/*
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
*/