import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavAvatar from './NavAvatar';
import device from './device';
import avatar from '../../images/avatar.jpeg';

export const NavRightMobileMenuWrapper = styled.div`
  @media ${device.tablet} {
    width: 100%;
    position: absolute;
    top: 10;
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 999;
  }
`;

// const MobileMenuItem = styled.di
const activeClassName = 'active';

const MobileMenuItem = styled(NavLink).attrs({ activeClassName })`
  @media ${device.tablet} {
    color: #4b5563;
    padding-right: 1rem;
    padding-left: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-top: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    background-color: transparent;
    border-left: 4px solid transparent;
    text-decoration: none;
    &.${activeClassName} {
      color: #5145cd;
      border-left: 4px solid #6875f5;
      background-color: #f0f5ff;
      &:hover {
        color: #5145cd;
        border-left: 4px solid #6875f5;
        background-color: #f0f5ff;
      }
    }
    &:hover {
      border-left: 4px solid #d2d6dc;
      background-color: #f9fafb;
    }
  }
`;

const NavMobileTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavMobileBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 0.75rem;
  border-top: 1px solid #e5e7eb;
`;

const NavProfile = styled.div`
  display: flex;
`;

const NavProfileInfo = styled.div`
  margin-left: 0.75rem;
`;
const NavProfileName = styled.div`
  color: #252f3f;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
`;
const NavProfileEmail = styled.div`
  color: #6b7280;
  line-height: 1.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;
const NavBottomLinks = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
`;

const NavBottomLink = styled(MobileMenuItem)`
  @media ${device.tablet} {
    border-left: none;
    &:hover {
      border-left: none;
      background-color: #f9fafb;
    }
  }
`;

export const NavRightMobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const close = () => closeMenu();
  return (
    <NavRightMobileMenuWrapper>
      <NavMobileTop>
        <MobileMenuItem exact to="/" onClick={close}>
          Dashboard
        </MobileMenuItem>
        <MobileMenuItem to="/trips" onClick={close}>
          Trips
        </MobileMenuItem>
        <MobileMenuItem to="/refunds" onClick={close}>
          Refunds
        </MobileMenuItem>
        <MobileMenuItem to="/events" onClick={close}>
          Events
        </MobileMenuItem>
      </NavMobileTop>
      <NavMobileBottom>
        <NavProfile>
          <NavAvatar>
            <img src={avatar} />
          </NavAvatar>
          <NavProfileInfo>
            <NavProfileName>Tunde Ganiy</NavProfileName>
            <NavProfileEmail>tundeganiy@gmail.com</NavProfileEmail>
          </NavProfileInfo>
        </NavProfile>
        <NavBottomLinks>
          <NavBottomLink to="/profile">Your Profile</NavBottomLink>
          <NavBottomLink to="/settings">Settings</NavBottomLink>
          <NavBottomLink to="/logout">Sign out</NavBottomLink>
        </NavBottomLinks>
      </NavMobileBottom>
    </NavRightMobileMenuWrapper>
  );
};
