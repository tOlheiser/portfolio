import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    
    font-family: 'Source Code Pro', sans-serif;
    font-size: 14px;
    line-height: 14px;
    border: 1px solid #64ffDA;
    border-radius: .3em;
    background: transparent;
    color: #64ffDA;
    line-height: 14px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    {/* Positioning will need to be modified. */}
    display: flex;
    align-self: flex-start;
    padding: .7rem 1rem;
    margin-top: 1.5em;
    margin: 0;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;

    &:hover,
    &:focus {
      background: rgba(100, 255, 218, .12);
      outline: none;
      outline-offset: -4px;
    }
    &:active {
      transform: scale(.99);
    }
`

const Button = ({content}) => (
    <StyledButton>{content}</StyledButton>
)

export default Button