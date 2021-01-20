import React from "react";
import styled from "styled-components";
import SectionHeading from "./sectionHeading";
import SectionContainer from "./sectionContainer";
import { StyledP } from "../styles/contentTags";
import PropTypes from 'prop-types';

const Image = styled.img`
  width: auto;
  height: 350px;
  border-radius: 5px;
`

const StyledSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
/* Remove flex wrap then add a media query that changes this to a column. */
const Content = styled.article`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid orange;
  
/*
  @media screen and (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    
  }*/
`;

const PhotoDiv = styled.div`
  width: 300px;
  height: 300px;
  max-width: 300px;
  max-height: 300px;
  background-color: ${props => props.theme.main};
`;

const P = styled(StyledP)`
  max-width: 600px;
  border: 1px solid red;

  @media only screen and (min-width: 1168px) {
    margin-right: 40px;
  }
`;

const About = () => ( 
  <SectionContainer>
    <div id="about"></div>
    <SectionHeading heading="About Me" subheading="Introductions"/>
    {/* P and Image are siblings; Content is the parent */}
    <Content>
      <P>Hi there! My name's Tanner, and I'm an aspiring front-end developer currently living in Regina, SK. My background is in the oil & gas industry where I developed my ability to communicate and work within a team effectively.<br/>

      <br/>I love coding. I find it incredibly stimulating. Developing an app that people use and admire is satisfying and completely worth the time and effort. My current focus is becoming exceptionally skilled with React Hooks and learning about the JAMStack and serverless architectures.
      <br/>

      <br/>When I'm not coding in my spare time I enjoy practicing Muay Thai & Jiu Jitsu, creating a comic book with friends, and reading manga.</P>
      {/*<PhotoDiv/>*/}
      <Image src="../../static/tanner.jpg" alt="Tanner Olheiser" />
    </Content>
  </SectionContainer>
);

export default About;
