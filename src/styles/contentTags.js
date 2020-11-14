import styled from "styled-components";

/* Add <a/> tags for my nav/menu links */

export const StyledH1 = styled.h1` 
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.title};
  color: ${props => props.theme.primaryLight};
  line-height: clamp(3.4rem, 6vw, 5rem);
`

export const StyledH2 = styled.h2` 
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.xl};
  color: ${props => props.theme.primaryLight}; 
` 

export const StyledH3 = styled.h3` 
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.l};
  color: ${props => props.theme.primaryLight};
`

export const Subheading = styled.h4`
  font-family: ${props => props.theme.monoFont};
  font-size: ${props => props.theme.subh};
  color: ${props => props.theme.main};
  font-weight: 600;
  /* Need to define a padding that takes in the padding size as props */
`

export const StyledP = styled.p` 
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.m};;
  color: ${props => props.theme.accentLight};
  max-width: 65ch;
  line-height: 1.9rem;
  /* Consider defining a padding that takes in the padding size as props */
`

export const StyledTags = styled.p`
  font-family: ${props => props.theme.monoFont};
  font-size: ${props => props.theme.xs};
  color: ${props => props.theme.main};
  display: inline-block;
  padding-right: 1em;
`