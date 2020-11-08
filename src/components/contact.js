import React from "react"
import styled from "styled-components"
import SectionHeading from "./sectionHeading"
import SectionContainer from "./sectionContainer"
import PropTypes from 'prop-types';
import emailjs from "emailjs-com"
import { StyledP } from "../styles/contentTags"
import Icon from "./icons/icon"
import {socialMedia} from '../config'

const StyledSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const StyledRowDiv = styled.div`
  flex-direction: row;
`

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const P = styled(StyledP)`
  max-width: 600px;
  text-align: center;

  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.main};
    position: relative;
    top: 3px;
    margin-right: .5em;
    &:last-of-type {
      margin-left: 2em;
    }
  }
`

const SmallText = styled.p`
  font-family: ${props => props.theme.monoFont}; 
  display: inline-block;
  color: ${props => props.theme.primaryLight};
  font-size: 13px;
  padding-top: 7px;
`

/*
.sectionContainer {
    display: flex;
    width: 960px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid red;
}

.sectionHeading {
    font-family: 'Source Sans Pro', serif;
    font-size: 60px;
    line-height: 50px;
    color: #CCD6F6;
}

.subHeading {
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
    line-height: 17.6px;
    color: #64FFDA;
}
*/

const StyledLabel = styled.label`
  
  font-family: ${props => props.theme.primaryFont};
  color: ${props => props.theme.primaryLight};
  font-size: 18px;
`

const StyledInput = styled.input`
  width: 350px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.accentLight};
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  font-family: ${props => props.theme.primaryFont};
  font-size: 15px;
  &::placeholder {
    font-family: ${props => props.theme.monoFont};
  }
  &:focus {
    outline: 0;
    border: 1.5px solid ${props => props.theme.main};
  }
  &:hover {
    -webkit-transition:border-color 0.3s ease-in-out;
    -moz-transition:border-color 0.3s ease-in-out;
    transition:border-color 0.3s ease-in-out;
    border:1px solid #fff;
  }
`

const StyledTextArea = styled.textarea`
  width: 350px;
  max-width: 100%;
  height: 100px;
  border: 1px solid ${props => props.theme.accentLight};
  border-radius: 4px;
  outline: 0;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  margin-top: 10px;
  font-family: ${props => props.theme.primaryFont};
  font-size: 15px;
  &::placeholder {
    font-family: ${props => props.theme.monoFont};
  }
  &:focus {
    outline: 0;
    border: 1.5px solid ${props => props.theme.main};
  }
  &:hover {
    -webkit-transition:border-color 0.3s ease-in-out;
    -moz-transition:border-color 0.3s ease-in-out;
    transition:border-color 0.3s ease-in-out;
    border:1px solid #fff;
  }
`

const StyledSubmit = styled.input`
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

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledSocialList = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 60px;
  
  li {
    padding-left: 30px;
    padding-right: 30px;
    a {
      /* May need to use refs to get hover functioning properly */
      &:hover,
      &:focus {
        transform: translateY(-3px);
        fill: ${props => props.theme.main};
      }
      svg {
        width: 25px;
        height: 25px;
        fill: ${props => props.theme.primaryLight};
      }
    }
  }
  
  @media (min-width: 901px) {
    display: none;
  }
`;

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_y475inj', e.target, 'user_W6KFGughCQPpSH3kztNdk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset();
  }
  
  return (
  <SectionContainer>
    <SectionHeading heading="Contact Me" subheading="Get in Touch"/>
    <P>Feel free to reach out if you have any questions for me or if you just 
    wanted to say hi. I love talking anything development related and I'm happy 
    to discuss my work as well as how I can help you.<br/>

    <ContactInfo>
      <SmallText><Icon name="Location" />21 Fox Glove Crescent, Regina, SK</SmallText>
      <SmallText><Icon name="Phone" />{`(306) 519-2152`}</SmallText>
    </ContactInfo>
    </P>
    

    <ColumnDiv>
    <form onSubmit={sendEmail}>
      <StyledLabel> Name <br/>
        <StyledInput type="text" name="name" placeholder="John Doe"/>
      </StyledLabel><br/><br/>

      <StyledLabel> Email <br/>
        <StyledInput type="email" name="email" placeholder="johndoe@gmail.com"/>
      </StyledLabel><br/><br/>

      <StyledLabel> Message <br/>
        <StyledTextArea type="text" name="message" placeholder="Enter your message here..."/>
      </StyledLabel><br/><br/>

      <StyledSubmit type="submit" value="Send"/>
    </form> 
    </ColumnDiv>

    <StyledSocialList>
      {socialMedia && socialMedia.map(({platform, address}, i) => (
          <li key={i}>
            <a href={address} aria-label={platform}>
              <Icon name={platform}/>
            </a>
          </li>
        ))}
    </StyledSocialList>

  </SectionContainer>
  )}
export default Contact

// <input type="text" name="name" />
//<input type="submit" value="Send"/>