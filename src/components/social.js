import React from 'react';
import styled from 'styled-components';
import Icon from './icons/icon';
import Sidebar from './sidebar';
import {socialMedia} from '../config';

const StyledSocialList = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  /* Vertical Line */
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${props => props.theme.primaryLight};
  }
  li {
    padding: 10px;
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      /* May need to use refs to get hover functioning properly */
      svg {
        width: 19px;
        height: 19px;
        fill: ${props => props.theme.primaryLight};

        &:hover {
        transform: translateY(-3px);
        fill: ${props => props.theme.main};
      }
      }
    }
  }
`;

const Social = () => (
  <Sidebar position="left">
    <StyledSocialList>
      {socialMedia && socialMedia.map(({platform, address}, i) => (
        <li key={i}>
          <a href={address} target="_blank" aria-label={platform}>
            <Icon name={platform}/>
          </a>
        </li>
      ))}
      
    </StyledSocialList>
  </Sidebar>
)

export default Social