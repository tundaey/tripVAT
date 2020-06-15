import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { NavRightMobileMenu } from './NavMobile';
import NavAvatar from './NavAvatar';
import device from './device';
import navLogo from '../../images/workflow-logo.svg';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.jpeg';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 64px;
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fff;
  @media ${device.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
`;

const NavLogo = styled.div`
  img {
    width: auto;
    height: 2rem;
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const NavMobileMenuButton = styled.button``;

const NavLeftMobile = styled.div`
  display: none;
  @media ${device.tablet} {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: auto;
      height: 2rem;
    }

    button {
      padding: 0.5rem;
      border-radius: 0.375rem;
      border: none;
      background-color: white;
      margin-right: 0.5rem;
      outline: none;
      .svg-inline--fa {
        color: #9fa6b2;
        width: 1.5rem;
        height: 1.5rem;
      }
      &:focus {
        .svg-inline--fa {
          color: #6b7280;
        }
      }
      &:hover {
        background-color: #f4f5f7;
        .svg-inline--fa {
          color: #6b7280;
        }
      }
    }
  }
`;

const NavMenu = styled.div`
  margin-left: 1.5rem;
  display: flex;
  height: 100%;
  @media ${device.tablet} {
    display: none;
  }
`;

const activeClassName = 'active';

const NavMenuItem = styled(NavLink).attrs({ activeClassName })`
  color: #6b7280;
  margin-left: 2rem;
  padding-top: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  line-height: 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  &.${activeClassName} {
    color: #161e2e;
    border-bottom: 2px solid #6875f5;
  }
  &:hover {
    color: #374151;
    border-color: #d2d6dc;
  }
`;

const NavAccount = styled.div`
  display: flex;
  margin-right: 2rem;
`;

const NavNotification = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
  cursor: pointer;
  border-radius: 9999px;
  outline: none;
  margin-left: 0.5rem;
  &:focus {
    color: #6b7280;
    background-color: #f4f5f7;
  }
  .svg-inline--fa {
    width: 1.5rem;
    height: 1.5rem;
    color: #9fa6b2;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavButton = styled.div`
  width: 120px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    display: none;
  }
`;

const Nav = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const closeMenu = () => setOpenMobileMenu(false);
  return (
    <>
      <NavWrapper>
        <NavLeft>
          <NavLogo>
            <img src={navLogo} />
          </NavLogo>
          <NavLeftMobile>
            <NavMobileMenuButton onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </NavMobileMenuButton>
            <img src={logo} />
          </NavLeftMobile>
          <NavMenu>
            <NavMenuItem exact to="/">
              Dashboard
            </NavMenuItem>
            <NavMenuItem to="/trips">Trips</NavMenuItem>
            <NavMenuItem to="/refunds">Refunds</NavMenuItem>
            <NavMenuItem to="/events">Events</NavMenuItem>
          </NavMenu>
        </NavLeft>
        <NavAccount>
          <NavButton>
            <Button full icon={['fas', 'plus']} color="primary" type="button">
              New Trip
            </Button>
          </NavButton>
          <NavRight>
            <NavNotification>
              <FontAwesomeIcon icon={['far', 'bell']} />
            </NavNotification>
            <NavAvatar>
              <img src={avatar} />
            </NavAvatar>
          </NavRight>
        </NavAccount>
      </NavWrapper>
      {openMobileMenu && <NavRightMobileMenu closeMenu={closeMenu} />}
    </>
  );
};

export default Nav;
