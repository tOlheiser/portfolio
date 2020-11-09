import React from 'react';
import styled from 'styled-components'
import Hero from './hero'
import Navigation from './nav'

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  border: 1px solid yellow;
`

const LandingPage = () => (
  <PageWrapper>
    <Navigation/>
    <Hero />
  </PageWrapper>
)

export default LandingPage