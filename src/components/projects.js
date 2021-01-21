import React from "react";
import styled from "styled-components";
import {StyledH2, StyledH3, StyledP, StyledTags} from "../styles/contentTags"; 
import Icon from "./icons/icon";
import projects from "../content/projects";
import SectionHeading from "./sectionHeading";
import SectionContainer from "./sectionContainer";

const H3 = styled(StyledH3)`
  font-family: ${props => props.theme.primaryFont};
  font-size: 31px;
  color: ${props => props.theme.primaryLight};
  display: ${props => props.colH3 && "none"};

  @media only screen and (min-width: 1385px) {
    display: ${props => props.colH3 && "none"};
  }

`

/* Dynamically pass in the href's of the project photos 
Alternatively, replace the image with a div. The div with 
be given a background image. I determine which source to 
pass in based on props and if its in a media query. */


const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTagDiv = styled.div`
  text-align: right;
  padding-top: 1.2em;
  p {
    padding-left: .3em;
    &:last-of-type {
      padding-right: 0;
    }
  }
`

const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4em;

    &:last-child {
      margin-bottom: 0;
    }

    article {
      display: flex;
      flex-direction: column;
      max-width: 545px;
    }

    img {
      border-radius: 5px;
    }

  @media only screen and (min-width: 1385px) {
    flex-direction: row;
    margin: 0 30px;
    margin-bottom: 4em;

    /* Give article spacing from img and reverse flex direction
    every odd row. */
    &:nth-child(odd) {
      flex-direction: row-reverse;
      article {
        margin-right: 50px;
      }
    }

    &:nth-child(even) {
      article {
        margin-left: 50px;
      }
    }

    article {
      max-width: 500px;
    }
}

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
      svg {
        width: 20px;
        height: 20px;
        fill: ${props => props.theme.primaryLight};

        &:hover, &:focus {
          fill: ${props => props.theme.main};
        }
      }
    }
  }
`;

const ProjectImage = styled.div`
  background-image: url(${props => props.colImage});
  height: 290px;
  width: 545px;

  @media only screen and (min-width: 1385px) {
    background-image: url(${props => props.rowImage});
    height: 375px;
    width: 500px
  }
`


const Projects = () => ( 
  <SectionContainer> 
    <div id="projects"></div>{/* Section Container - Max width and c
  entered in 100vh container*/}
    <SectionHeading heading="Projects" subheading="See what I've done" />

    <CardDiv>
      {projects && projects.map((project) => (
        <ProjectCard>
          
          <H3 colH3>{project.name}</H3>
          {/*<img src={project.image} alt={project.name} />*/}
          <ProjectImage rowImage={project.image} colImage={project.colImage}/>
          <article>
            <H3 rowH3>{project.name}</H3>
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
          </article>
        </ProjectCard>
      ))}
    </CardDiv>

  </SectionContainer>
)

export default Projects
