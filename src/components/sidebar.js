import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SideElement = styled.aside`
  position: fixed;
  bottom: 0;
  left: ${props => (props.position === 'left' ? '40px' : 'auto')};
  right: ${props => (props.position === 'right' ? '40px' : 'auto')};
  

  @media (max-width: 900px) {
    display: none;
  }
`;

const Sidebar = ({children, position}) => (
  <SideElement position={position}>
    {children}
  </SideElement>
)

Sidebar.propTypes = {
  position: PropTypes.string
}; 

export default Sidebar