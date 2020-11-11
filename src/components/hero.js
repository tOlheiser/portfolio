//import { Link } from "gatsby"
import React from "react";
import styled from "styled-components";
import StyledButton from "./button";
import { StyledH1, Subheading, StyledP } from "../styles/contentTags"; 

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2.3rem 7rem 2.3rem;
  align-self: center;
  justify-content: center;
  padding: 0 4rem;

  @media (max-width: 900px) {
    padding: 0 2.3rem;
  }
`

const Accent = styled.span`
  color: #8892B0;
`

const StyledLgButton = styled(StyledButton)`
  padding: 1.1rem 1.3rem;
  font-size: 15px;
  line-height: 16px;
`

const Hero = () => (
  <Container>
    <Subheading>Hi, my name is</Subheading>
    <StyledH1>Tanner Olheiser.<br/>
    <Accent>I'm a full-stack web developer.</Accent></StyledH1>
    <StyledP>I'm a fullstack developer based in Regina, SK specializing in building exceptional web applications using React, Express, Node, and MongoDB.</StyledP>
    <StyledLgButton>See Projects</StyledLgButton>
  </Container>
)

export default Hero