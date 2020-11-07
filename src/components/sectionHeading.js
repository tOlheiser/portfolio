import React from "react";
import styled from "styled-components";
import { StyledH2, StyledH3 } from "../styles/contentTags"; 

const StyledHeadingDiv = styled.div`
  text-align: center;
  margin-bottom: 40px;
  &:after {
    content: '';
    display: block;
    width: 99px;
    height: 2px;
    margin: 0 auto;
    background-color: ${props => props.theme.main};
  }
`;

const SectionHeading = ({heading, subheading}) => (
  <StyledHeadingDiv> {/* Section Title + Content */}
    <StyledH3>{subheading}</StyledH3>
    <StyledH2>{heading}</StyledH2>
  </StyledHeadingDiv>
);

export default SectionHeading;