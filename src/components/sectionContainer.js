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
  margin: 0 30px 0 30px;

  @media screen and (min-width: 620px) {
    width: calc(100% - 100px);
  }

  @media screen and (min-width: 900px) {
    width: calc(100% - 220px);
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