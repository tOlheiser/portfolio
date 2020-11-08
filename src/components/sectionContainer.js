import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 150px);
  margin: 0 200px;
`;

const SectionContainer = ({children}) => (
  <Container>
    <Section>
      {children}
    </Section>
  </Container>
)

export default SectionContainer;