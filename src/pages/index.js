import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />

      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);
// between Jobs and Projects on line 16 <Featured />

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
