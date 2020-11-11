import React from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';

const StyledEmailDiv = styled.div`
  display: flex;
  flex-direction: column;

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
    font-size: ${props => props.theme.xxs};
    letter-spacing: 0.1rem;
    writing-mode: vertical-rl;
    
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${props => props.theme.main};
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