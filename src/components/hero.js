//import { Link } from "gatsby"
import React from "react";
import styled from "styled-components";
import StyledButton from "./button";
import { StyledH1, Subheading, StyledP } from "../styles/contentTags"; 

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px; /* Margins for mobile view */
  align-self: center; /* centers container on page */
  justify-content: center; /* centers content on y axis on page */

  div {
    flex-direction: column;
    align-self: center;
  }

  h4 {
    padding-bottom: 1.3rem;
  }

  p {
    padding: 1.8rem 0 2.6rem 0;
  }

  @media screen and (min-width: 620px) {
    width: calc(100% - 100px);
  }

  @media screen and (min-width: 900px) {
    width: calc(100% - 220px);
  }

`

const Accent = styled.span`
  color: ${props => props.theme.accentLight};
`

const StyledLgButton = styled(StyledButton)`
  padding: 1.1rem 1.3rem;
  font-size: 15px;
  line-height: 16px;
`

const EM = styled.span`
  color: ${props => props.theme.main};
`

const Hero = () => (
  
  <Container>
    <div>
      <Subheading>Hi, my name is</Subheading>
      <StyledH1>Tanner Olheiser.<br/>
      <Accent>I'm a full-stack web developer.</Accent></StyledH1>
      <StyledP>I'm a full-stack developer currently residing in Regina, SK. I craft elegant solutions with an emphasis on <EM>speed</EM>, <EM>accessibility</EM>, and <EM>responsive design</EM> using the <EM>MERN</EM> stack (<EM>MongoDB</EM>, <EM>Express</EM>, <EM>React</EM>, <EM>Node</EM>).
      </StyledP>
      <a href="#projects">
        <StyledLgButton>See Projects</StyledLgButton>
      </a> 
    </div>
  </Container>
  
)

export default Hero