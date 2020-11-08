import React from "react";
import styled from "styled-components";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import projects from '../content/projects'
import SectionHeading from './sectionHeading'

// 1. Find a 'tap gesture' svg to place on top right corner of each card.
// 2. Determine a colour theme then add a corresponding transparent-gradient.
// 3. After project is completed, use a photo as the background.
// 4. Tune the spacing/font size for screens that are extra small.

/*const StyledDiv = styled.div`
  background-color: ${props => props.theme.main};
  border: 1px solid #fff;
  min-width: 300px;
  min-height: 400px;
  height: 400px;
  width: 400px;
  max-width: 300px;
  max-height: 400px; 
`*/

const CarouselHeading = styled.h3`
  font-size: 30px;
  font-family: ${props => props.theme.primaryFont};
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
`

const CarouselTagline = styled.p`
  font-size: 16px;
  font-family: ${props => props.theme.primaryFont};
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
`


const ProjectCarousel = (props) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 1.5,
    mode: "free-snap",
    spacing: 30,
    centered: true,
    loop: false,
  })

  return (
    <React.Fragment>
      <SectionHeading heading="Projects" subheading="See what I've done"/>
      <div ref={sliderRef} className="keen-slider">
        {projects && projects.map(project => (
          <div className="keen-slider__slide number-slide1">
            <CarouselHeading>{project.name}</CarouselHeading><br/>
            <CarouselTagline>Track & manage your certifications, and apply for jobs.</CarouselTagline>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default ProjectCarousel;
