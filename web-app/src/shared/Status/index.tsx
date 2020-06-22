import styled from 'styled-components';

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

interface StatusProps {
  status: 'pending' | 'rejected' | 'paid';
}

const Status = styled.span<StatusProps>`
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

export default Status;
