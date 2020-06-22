import React, { useState } from 'react';
import styled from 'styled-components';
import device, { size } from '../../shared/device';
import { Stats, RecentRefunds } from '../../components';
import { Status } from '../../components/RecentRefunds';
import { Table, MarginTop } from '../../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  @media ${device.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Header = styled.h1`
  line-height: 1.25;
  font-size: 1.875rem;
  color: #161e2e;
  font-weight: 500;
`;

const H3 = styled.h3`
  color: #161e2e;
  line-height: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`;

const Home = () => {
  const statsData = [
    { title: 'Total Refunds', body: '£7,789' },
    { title: 'Trips', body: '5' },
    { title: 'Outstanding Refunds', body: '£500' },
  ];
  const recentRefunds = [
    { title: 'Apple', amount: '£3,600', date: 'Aug. 10, 2018', status: Status['pending'] },
    { title: 'Primark', amount: '£3,600', date: 'Aug. 10, 2018', status: Status['rejected'] },
    { title: 'Boots', amount: '£3,600', date: 'Aug. 10, 2018', status: Status['paid'] },
  ];
  return (
    <>
      {/* <Box>
        <div className="circle"></div>
        <div className="circle"></div>
      </Box> */}
      <Container>
        <H3>Current Stats</H3>
        <Stats data={statsData} />
        <MarginTop size="medium">
          <H3>Recent Refunds</H3>
          <RecentRefunds data={recentRefunds} />
        </MarginTop>
        <MarginTop size="medium">
          <H3>Refunds History</H3>
          <Table />
        </MarginTop>
      </Container>
    </>
  );
};

export default Home;
