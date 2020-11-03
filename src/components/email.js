import React from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';

const StyledEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* Vertical Line */
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${props => props.theme.primaryLight};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: ${props => props.theme.monoFont};
    font-size: 13px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = () => (
  <Sidebar position="right">
    <StyledEmailDiv>
      <a href={'mailto:tanner.olheiser@gmail.com'}>tanner.olheiser@gmail.com</a>
    </StyledEmailDiv>
  </Sidebar>
)

export default Email;