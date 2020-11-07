import React from "react";
import styled from "styled-components";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import skills from '../content/skillContent'
import { StyledH3 } from "../styles/contentTags";

// 1. Find a 'tap gesture' svg to place on top right corner of each card.
// 2. Determine a colour theme then add a corresponding transparent-gradient.
// 3. After project is completed, use a photo as the background.
// 4. Tune the spacing/font size for screens that are extra small.

const H3 = styled(StyledH3)`
color: ${props => props.theme.main};
position: relative;
top: -70px;
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

  const CardContainer = styled.div`
  background-color: ${props => props.theme.primaryDark};
  border: 2px solid ${props => props.theme.main};
  height: 400px;
  margin-top: 100px;
  text-align: center;

  li {
    position: relative;
    top: -60px;
    list-style: none;
    padding-bottom: 15px;
    font-size: 15px;
    font-family: ${props => props.theme.primaryFont};
    color: ${props => props.theme.primaryLight};
  }
`

const SkillCarousel = (props) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 1.3,
    mode: "free-snap",
    spacing: 15,
    centered: true,
    loop: false,
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {skills && skills.map(skill => (
        <div className="keen-slider__slide"> {/* number-slide1 */}
        <CardContainer>
        <Bubble bgColor={skill.iconBackground}/>
        <H3>{skill.title}</H3>
        {skill.technologies.map(tech => (
          <li key={tech.i}><strong>{tech.category}:</strong> {tech.item}</li>
        ))}
      </CardContainer>
        </div>
      ))}
    </div>
  )
}

export default SkillCarousel;
