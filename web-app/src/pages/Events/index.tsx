import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const Header = styled.h1`
  line-height: 1.25;
  font-size: 1.875rem;
  color: #161e2e;
  font-weight: 700;
`;

const Events = () => {
  return (
    <Container>
      <Header>Events</Header>
    </Container>
  );
};

export default Events;
