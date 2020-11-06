import styled from "styled-components";

export const StyledH1 = styled.h1` 
  font-family: 'Source Sans Pro', serif;
  font-size: 80px;
  line-height: 88px;
  color: #CCD6F6; 
`

export const StyledH2 = styled.h2` 
  font-family: 'Source Sans Pro', serif;
  font-size: 65px;
  line-height: 68px;
  color: #CCD6F6; 
` 


export const StyledH3 = styled.h3` 
  font-family: 'Source Code Pro', sans-serif;
  font-size: 16px;
  line-height: 17.6px;
  color: #64FFDA;
  padding-bottom: 1em;
  margin-top: 3em;
`

/* export const StyledH4 = styled.h4` 

`
*/

export const StyledP = styled.p` 
  font-family: 'Source Sans Pro', serif;
  font-size: 20px;
  line-height: 26px;
  color: #8892B0;
  max-width: 600px; 
  padding-bottom: 2.3em;
`

export const StyledTags = styled.p`
  font-family: 'Source Code Pro', sans-serif;
  font-size: 14px;
  color: ${props => props.theme.main};
  display: inline-block;
  padding-right: 1em;
  
`