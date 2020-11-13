import React from 'react';
import styled from 'styled-components';
import StyledButton from "./button";
import resume from "../../public/static/resume.pdf"
import Icon from './icons/icon'
import {socialMedia} from '../config'

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
`

const StyledMenuButton = styled(StyledButton)`
  padding: 1.2rem 1.6rem;
  font-size: ${props => props.theme.m};
  margin-bottom: 20px;
`

const StyledSocialList = styled.div` 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 60px;
  justify-self: flex-end;
  
  li {
    padding: 0 15px;

    svg {
      width: 30px;
      height: 30px;
      fill: ${props => props.theme.primaryLight};

      &:focus, &:hover {
        fill: ${props => props.theme.main};
        outline: none;
      }
    }
  }


`

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  li {
    margin: 2rem 2.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  a {
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.primaryLight};
    transition: color 0.3s linear;
    font-family: ${props => props.theme.monoFont};

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
      outline: none;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      
      <StyledLinks>
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
            target="_blank"><StyledMenuButton>Resume</StyledMenuButton>
          </a>  
        </li>
      </StyledLinks>

      <StyledSocialList>
        {socialMedia && socialMedia.map(({platform, address}, i) => (
            <li key={i}>
              <a href={address} target="_blank" aria-label={platform}>
                <Icon name={platform}/>
              </a>
            </li>
          ))}
      </StyledSocialList>

    </StyledMenu>
  )
}

export default Menu;