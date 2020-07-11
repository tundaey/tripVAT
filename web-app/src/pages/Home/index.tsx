import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import device, { size } from '../../shared/device';
import { Stats, RecentRefunds } from '../../components';
import { Status } from '../../components/RecentRefunds';
import { Table, MarginTop, Avatar } from '../../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appleImg from '../../images/apple-logo.png';
import boots from '../../images/boots.png';
import primark from '../../images/primark.jpeg';
import debs from '../../images/debs.jpg';
import spd from '../../images/spd-logo.jpg';

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

const H3 = styled.h3`
  color: #161e2e;
  line-height: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`;

const RefundsHistoryDesktop = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const RefundsHistoryMobile = styled.div`
  @media ${device.tablet} {
    display: flex;
    max-width: 80rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.375rem;
    background-color: #fff;
  }
  display: none;
`;

const RefundLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

const RefundMobileList = styled.ul`
  list-style: none;
  width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
`;

const RefundItem = styled.li`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  :not(:last-child) {
    border-bottom: 1px solid #d2d6dc;
  }
  :hover,
  :focus {
    background-color: #f9fafb;
  }
`;

const RefundDetails = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  .brand {
    overflow: hidden;
    text-overflow: ellipsis;
    color: #5850ec;
    line-height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: capitalize;
  }
  .location {
    color: #6b7280;
    margin-top: 0.5rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
  }
  .date {
    color: #6b7280;
    margin-top: 0.5rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
  }
`;

const RefundAmounts = styled.div`
  .refund {
    color: #161e2e;
    line-height: 1.25rem;
    font-size: 1.2rem;
  }

  .cost {
    color: #6b7280;
    margin-top: 0.5rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
  }
`;

const IconRight = styled.div`
  color: #9fa6b2;
  svg {
    height: 1.25rem;
  }
`;

const data = [
  {
    brandLogo: appleImg,
    brandName: 'apple',
    location: 'London, UK',
    date: '2019-02-22',
    cost: '£1000',
    refund: '£200',
    status: 'pending',
    id: '1',
  },
  {
    brandLogo: primark,
    brandName: 'primark',
    location: 'London, UK',
    date: '2019-02-23',
    cost: '£100',
    refund: '£20',
    status: 'paid',
    id: '2',
  },
  {
    brandLogo: boots,
    brandName: 'boots',
    location: 'London, UK',
    date: '2020-05-05',
    cost: '£200',
    refund: '£20',
    status: 'rejected',
    id: '3',
  },
  {
    brandLogo: debs,
    brandName: 'debenhams',
    location: 'London, UK',
    date: '2020-01-26',
    cost: '£400',
    refund: '£80',
    status: 'paid',
    id: '4',
  },
  {
    brandLogo: spd,
    brandName: 'sports direct',
    location: 'London, UK',
    date: '2020-04-01',
    cost: '£250',
    refund: '£85',
    status: 'pending',
    id: '5',
  },
];

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
          <RefundsHistoryDesktop>
            <Table />
          </RefundsHistoryDesktop>
          <RefundsHistoryMobile>
            <RefundMobileList>
              {data.map((d) => (
                <RefundItem key={d.id}>
                  <RefundLink to="/">
                    <Avatar>
                      <img src={d.brandLogo} />
                    </Avatar>
                    <RefundDetails>
                      <div className="brand">{d.brandName}</div>
                      <div className="location">{d.location}</div>
                      <div className="date">{d.date}</div>
                    </RefundDetails>
                    <RefundAmounts>
                      <div className="refund">{d.refund}</div>
                      <div className="cost">{d.cost}</div>
                    </RefundAmounts>
                    <IconRight>
                      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                    </IconRight>
                  </RefundLink>
                </RefundItem>
              ))}
            </RefundMobileList>
          </RefundsHistoryMobile>
        </MarginTop>
      </Container>
    </>
  );
};

export default Home;
