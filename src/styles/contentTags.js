import styled from "styled-components";

export const StyledH1 = styled.h1` 
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.title};
  color: ${props => props.theme.primaryLight};
  line-height: clamp(3.4rem, 6vw, 5rem); /* 5rem */
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

export const Subheading = styled.p`
  font-family: ${props => props.theme.monoFont};
  font-size: ${props => props.theme.subh};
  color: ${props => props.theme.main};
  font-weight: 600;
`

export const StyledP = styled.p` 
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.m};;
  color: ${props => props.theme.accentLight};
  max-width: 65ch;
  line-height: 1.9rem;
`

export const StyledTags = styled.p`
  font-family: ${props => props.theme.monoFont};
  font-size: ${props => props.theme.xs};
  color: ${props => props.theme.main};
  display: inline-block;
  padding-right: 1em;
`