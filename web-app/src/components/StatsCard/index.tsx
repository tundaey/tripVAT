import React, { ReactNode } from 'react';
import styled from 'styled-components';
import device from '../../shared/device';

const StatsWrapper = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const StatsCard = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-right: 1rem;
  flex-basis: 15rem;
  @media ${device.tablet} {
    flex-basis: 5rem;
    margin-bottom: 1rem;
  }
`;

const StatsCardTitle = styled.dt`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #6b7280;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const StatsCardBody = styled.dd`
  color: #161e2e;
  margin-top: 0.25rem;
  margin-left: 0;
  line-height: 2.25rem;
  font-size: 1.875rem;
  font-weight: 600;
`;

interface Stat {
  title: string;
  body: string;
}

interface StatsProps {
  data: Array<Stat>;
}

const Stats = ({ data }: StatsProps) => (
  <StatsWrapper>
    {data.map((d) => (
      <StatsCard key={d.title}>
        <dl>
          <StatsCardTitle>{d.title}</StatsCardTitle>
          <StatsCardBody>{d.body}</StatsCardBody>
        </dl>
      </StatsCard>
    ))}
  </StatsWrapper>
);

export default Stats;
