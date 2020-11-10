import React from "react";
import styled from "styled-components";
import {StyledH2, StyledH3, StyledP, StyledTags} from "../styles/contentTags"; 
import Icon from "./icons/icon";
import projects from "../content/projects";
import SectionHeading from "./sectionHeading";
import SectionContainer from "./sectionContainer";
// import PropTypes from 'prop-types'

const H3 = styled(StyledH3)`
font-family: ${props => props.theme.primaryFont};
font-size: 30px;
color: ${props => props.theme.primaryLight};
`

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const ProjectPhoto = styled.div`
  width: 600px;
  max-width: 600px;
  height: 350px;
  background-color: ${props => props.theme.main};
  margin-bottom: 20px;
`

const StyledTagDiv = styled.div`
  text-align: right;
  p {
    &:last-of-type {
      padding-right: 0;
    }
  }
`

const ProjectCard = styled.div`
  max-width: 600px;
  margin: 0 30px;
`

const StyledSocialList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin-top: .7em;

  li {
    padding: 10px;
    &:last-of-type {
      padding-right: 0;
    }
    a {
      /* May need to use refs to get hover functioning properly */
      &:hover,
      &:focus {
        transform: translateY(-3px);
        fill: ${props => props.theme.main};
      }
      svg {
        width: 20px;
        height: 20px;
        fill: ${props => props.theme.primaryLight};
      }
    }
  }
`;


const Projects = () => ( 
    <SectionContainer> {/* Section Container - Max width and c
    entered in 100vh container*/}
      <SectionHeading heading="Projects" subheading="See what I've done" />

      <CardDiv>
        {projects && projects.map((project) => (
          <ProjectCard>
            <StyledH3>{project.name}</StyledH3>
            <ProjectPhoto/>
            <StyledP>{project.description}</StyledP>
            <StyledTagDiv>
              {project.tags.map(tag => (
                <StyledTags>{tag}</StyledTags>
              ))}
            </StyledTagDiv>
            <StyledSocialList>
              <li>
                <a href={project.sourceCode} target="_blank" aria-label="GitHub">
                  <Icon name="GitHub"/>
                </a>
              </li>
              <li>
                <a href={project.demo} target="_blank" aria-label="Demo">
                  <Icon name="External"/>
                </a>
              </li>
            </StyledSocialList> 
          </ProjectCard>
        ))}
      </CardDiv>

    </SectionContainer>
)

export default Projects
