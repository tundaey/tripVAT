import React from 'react';
import styled from 'styled-components';
import device from '../../shared/device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RefundPillsWrapper = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const RefundPill = styled.div`
  border: 1px solid #e5e7eb;
  margin-right: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  /* width: 18rem; */
  flex-basis: 18rem;
  background-color: white;
  @media ${device.tablet} {
    margin-bottom: 1rem;
    flex-basis: 5rem;
    /* width: 30rem; */
  }
`;

const RefundInfoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
const RefundInfo = styled.div``;
const RefundTitle = styled.div`
  line-height: 1.25rem;
  font-size: 1.5rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;
const RefundAmount = styled.div`
  color: #6875f5;
  font-size: 1.2rem;
  padding-bottom: 0.2rem;
`;
const RefundDate = styled.div`
  color: #6b7280;
  font-size: 0.8rem;
`;

const statusColors = {
  rejected: {
    color: '#9b1c1c',
    bgColor: '#fde8e8',
  },
  paid: {
    color: '#03543f',
    bgColor: '#def7ec',
  },
  pending: {
    color: '#723b13',
    bgColor: '#fdf6b2',
  },
};

interface RefundStatusProps {
  status: 'pending' | 'rejected' | 'paid';
}

const RefundStatus = styled.span<RefundStatusProps>`
  background-color: ${(props) => statusColors[props.status].bgColor};
  color: ${(props) => statusColors[props.status].color};
  text-transform: capitalize;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  height: fit-content;
`;
const RefundLink = styled.button`
  width: 100%;
  color: #161e2e;
  background-color: #f9fafb;
  border: 1px solid transparent;
  font-size: 0.9rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  .svg-inline--fa {
    height: 0.7rem;
    margin-left: 0.5rem;
  }
`;

export enum Status {
  pending = 'pending',
  rejected = 'rejected',
  paid = 'paid',
}

interface Refund {
  title: string;
  amount: string;
  date: string;
  status: Status;
}

interface RecentRefundsProps {
  data: Array<Refund>;
}

const RecentRefunds = ({ data }: RecentRefundsProps) => (
  <RefundPillsWrapper>
    {data.map((d) => (
      <RefundPill key={d.title}>
        <RefundInfoWrapper>
          <RefundInfo>
            <RefundTitle>{d.title}</RefundTitle>
            <RefundAmount>{d.amount}</RefundAmount>
            <RefundDate>{d.date}</RefundDate>
          </RefundInfo>
          <RefundStatus status={d.status}>{d.status}</RefundStatus>
        </RefundInfoWrapper>
        <RefundLink>
          View Refund <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </RefundLink>
      </RefundPill>
    ))}
  </RefundPillsWrapper>
);

export default RecentRefunds;
