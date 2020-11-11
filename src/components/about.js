import React from "react";
import styled from "styled-components";
import SectionHeading from "./sectionHeading";
import SectionContainer from "./sectionContainer";
import { StyledP } from "../styles/contentTags";
import PropTypes from 'prop-types';

const StyledSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Content = styled.article`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  justify-content: center;
  

  @media screen and (max-width: 940px) {
    flex-direction: column;
    align-items: center;
  }
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
  margin-right: 40px;
`;

const About = () => ( 
  <SectionContainer>
    <div id="about"></div>
    <SectionHeading heading="About Me" subheading="Introductions"/>
    <Content>
      <P>Hi there! My name's Tanner, and I'm an aspiring fullstack developer currently living in Regina, SK.

      <br/><br/>What I really love about fullstack development is that I have the skills to bring ideas & dreams into reality. It brings me pride to know how everything works, from the design process, to how the front-end brings your pages to life, and how the back-end delivers those pages to the user.

      <br/><br/>My ambition is to continue to expand on my skillset and apply it in an environment where I'm doing interesting, meaningful work on a daily basis.</P>
      <PhotoDiv/>
    </Content>
  </SectionContainer>
);

export default About;
