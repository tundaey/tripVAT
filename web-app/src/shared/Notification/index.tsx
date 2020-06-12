import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NotificationProps {
  children: ReactNode;
  title: string;
}

const NotificationWrapper = styled.div`
  background-color: #fdf2f2;
  padding: 1rem;
  display: flex;
  border-radius: 0.375rem;
`;
const NotificationIcon = styled.div`
  flex-shrink: 0;
  svg {
    color: #f98080;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
const NotificationDetails = styled.div`
  margin-left: 0.75rem;
`;
const NotificationTitle = styled.p`
  color: #9b1c1c;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`;

const NotificationBody = styled.p`
  color: #c81e1e;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  margin-left: 0.75rem;
  ul {
    margin: 0;
    padding: 0;
  }
`;

const Notification = (props: NotificationProps) => {
  const icon = <FontAwesomeIcon icon={['fas', 'times-circle']} />;
  return (
    <NotificationWrapper>
      <NotificationIcon>{icon}</NotificationIcon>
      <NotificationDetails>
        <NotificationTitle>{props.title}</NotificationTitle>
        <NotificationBody>{props.children}</NotificationBody>
      </NotificationDetails>
    </NotificationWrapper>
  );
};

export default Notification;
