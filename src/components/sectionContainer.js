import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 160px);
  padding: 0 1.7rem;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 2.3rem;
  }
`;

const SectionContainer = ({children}) => (
  <Container>
    <Section>
      {children}
    </Section>
  </Container>
)

export default SectionContainer;