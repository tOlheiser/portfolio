import React from "react";
import styled from "styled-components";
import SectionHeading from "./sectionHeading";
import SectionContainer from "./sectionContainer";
import PropTypes from 'prop-types';
import { StyledH3 } from "../styles/contentTags";
import skills from "../content/skillContent";

const StyledSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
background-color: ${props => props.theme.primaryDark};
border: 2px solid ${props => props.theme.main};
width: 270px;
height: 400px;
margin: 20px;
margin-top: 100px;
text-align: center;

li {
  list-style: none;
  padding-bottom: 15px;
  font-size: ${props => props.theme.s};
  font-family: ${props => props.theme.primaryFont};
  color: ${props => props.theme.primaryLight};
}
`

const H3 = styled(StyledH3)`
font-family: ${props => props.theme.monoFont};
font-size: ${props => props.theme.m};
color: ${props => props.theme.main};
position: relative;
top: -20px;
`

const Bubble = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
  position: relative;
  top: -50px;
  margin: 0 auto;
`

const Skills = () => ( 
  <SectionContainer>
    <div id="skills"></div>
    <SectionHeading heading="My Skills" subheading="Technologies I use" />
    <StyledRowDiv>
    {skills && skills.map(skill => (
      <CardContainer>
        <Bubble bgColor={skill.iconBackground}/>
        <H3>{skill.title}</H3>
        {skill.technologies.map(tech => (
          <li key={tech.i}><strong>{tech.category}:</strong> {tech.item}</li>
        ))}
      </CardContainer>
    ))}
    </StyledRowDiv>
  </SectionContainer>
)

export default Skills
