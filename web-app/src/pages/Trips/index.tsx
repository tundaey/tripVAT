import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '../../shared';
import device, { size } from '../../shared/device';
import appleImg from '../../images/apple-logo.png';
import boots from '../../images/boots.png';
import primark from '../../images/primark.jpeg';
import debs from '../../images/debs.jpg';
import spd from '../../images/spd-logo.jpg';

const data = [appleImg, primark, boots, debs, spd];

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  @media ${device.tablet} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Header = styled.h1`
  line-height: 1.25;
  font-size: 1.875rem;
  color: #161e2e;
  font-weight: 700;
  @media ${device.tablet} {
    margin-left: 1rem;
  }
`;

const RefundsAvatar = styled(Avatar)`
  color: #fff;
  box-shadow: 0 0 0 5px currentColor;
  @media ${device.tablet} {
    box-shadow: 0 0 0 2px currentColor;
  }
`;

const TripItem = styled.li`
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  background-color: transparent;
  :not(:last-child) {
    border-bottom: 1px solid #d2d6dc;
  }
  :hover,
  :focus {
    background-color: #f9fafb;
  }
  cursor: pointer;
  @media ${device.tablet} {
    border-top: 1px solid #d2d6dc;
    :not(:last-child) {
      border-bottom: 0px solid #d2d6dc;
    }
  }
`;

const TripInner = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    display: flex;
    flex-direction: column;
  }
  .left {
    display: flex;
    align-items: center;
    svg {
      margin-left: 1.25rem;
      color: #9fa6b2;
      @media ${device.tablet} {
        margin-left: 0;
      }
    }
  }
  .location {
    white-space: nowrap;
    color: #5850ec;
    line-height: 1.25rem;
    font-size: 0.975rem;
    font-weight: 500;
    @media ${device.tablet} {
      font-size: 0.8rem;
    }
  }
  .date {
    margin-top: 0.5rem;
    color: #6b7280;
    line-height: 1.25rem;
    font-size: 0.975rem;
    @media ${device.tablet} {
      font-size: 0.8rem;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
  .refunds {
    overflow: hidden;
    display: flex;
  }
`;

const TripContainer = styled.div`
  @media ${device.tablet} {
    display: none;
  }
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
`;

const TripContainerMobile = styled.div`
  @media ${device.tablet} {
    display: flex;
    max-width: 80rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.375rem;
    background-color: #fff;
    ul {
      width: 100%;
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 0;
    }
  }
  display: none;
`;

const TripItemMobile = styled(TripItem)``;
const TripInnerMobile = styled(TripInner)`
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .date {
      margin-bottom: 1rem;
    }

    svg {
      margin-left: 0;
    }
  }
  .right {
    svg {
      /* margin-left: 1.25rem; */
      color: #9fa6b2;
    }
  }
`;

const tripData = [
  {
    location: 'London, UK',
    date: 'Ended on January 7, 2020',
    id: '1',
  },
  {
    location: 'London, UK',
    date: 'Ended on January 7, 2020',
    id: '2',
  },
  {
    location: 'London, UK',
    date: 'Ended on January 7, 2020',
    id: '3',
  },
];

const Trips = () => {
  return (
    <Container>
      <Header>Trips</Header>
      <TripContainer>
        <ul>
          {tripData.map((t) => (
            <TripItem key={t.id}>
              <TripInner>
                <div className="right">
                  <div className="location">{t.location}</div>
                  <div className="date">
                    <FontAwesomeIcon icon={['fas', 'calendar-week']} />
                    {`Ended on ${t.date}`}
                  </div>
                </div>
                <div className="left">
                  <div className="refunds">
                    {data.map((d) => (
                      <RefundsAvatar>
                        <img src={d} />
                      </RefundsAvatar>
                    ))}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                  </div>
                </div>
              </TripInner>
            </TripItem>
          ))}
        </ul>
      </TripContainer>
      <TripContainerMobile>
        <ul>
          {tripData.map((t) => (
            <TripItemMobile key={t.id}>
              <TripInnerMobile>
                <div className="left">
                  <div className="location">{t.location}</div>
                  <div className="date">
                    <FontAwesomeIcon icon={['fas', 'calendar-week']} />
                    {`Ended on ${t.date}`}
                  </div>
                  <div className="refunds">
                    {data.map((d) => (
                      <RefundsAvatar>
                        <img src={d} />
                      </RefundsAvatar>
                    ))}
                  </div>
                </div>
                <div className="right">
                  <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                </div>
              </TripInnerMobile>
            </TripItemMobile>
          ))}
        </ul>
      </TripContainerMobile>
    </Container>
  );
};

export default Trips;
