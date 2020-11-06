//import { Link } from "gatsby"
import React from "react";
import styled from "styled-components";
import StyledButton from "./button";
import { StyledH1, StyledH3, StyledP } from "../styles/contentTags"; 

const StyledHeroDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /*width: 960px;*/
  max-width: 960px;
  margin: 0 3em 9em 3em;
  align-self: center;
  justify-content: center;
`

const StyledAccentH1 = styled(StyledH1)`
  color: #8892B0;
  padding-bottom: .3em;
`

const StyledLgButton = styled(StyledButton)`
  padding: 1.1rem 1.3rem;
  font-size: 15px;
  line-height: 16px;
`

const Hero = () => (
  <StyledHeroDiv>
    <StyledH3>Hi, my name is</StyledH3>
    <StyledH1>Tanner Olheiser.</StyledH1>
    <StyledAccentH1>I'm a fullstack developer.</StyledAccentH1>
    <StyledP>I'm a fullstack developer based in Regina, SK specializing in building exceptional web applications using React, Express, Node, and MongoDB.</StyledP>
    <StyledLgButton>Get in Touch</StyledLgButton>
  </StyledHeroDiv>
)

export default Hero