import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import avatar from '../../images/avatar.jpeg';

const NavAvatar = styled.button`
  border-radius: 9999px;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #fff;
  margin-left: 1rem;
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
  }
`;

const Blanket = (props) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);

const MenuWrapper = styled.div`
  background-color: 'white';
  border-radius: 4;
  box-shadow: 0 0 0 1px ${(props) => props.shadow}, 0 4px 11px ${(props) => props.shadow};
  margin-top: 8;
  position: 'absolute';
  z-index: 2;
  width: 12rem;
`;

const Menu = (props) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
        right: '15%',
      }}
      {...props}
    />
  );
};

const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div css={{ position: 'relative' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);

const CustomInput = ({}) => null;
const options = [
  {
    label: 'Your Profile',
    value: '123',
  },
  {
    label: 'Settings',
    value: '123',
  },
  {
    label: 'Sign out',
    value: '123',
  },
];

export const NavAvatarDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const onSelectChange = (value) => {
    toggleOpen();
    setValue(value);
  };
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <NavAvatar onClick={toggleOpen}>
          <img src={avatar} />
        </NavAvatar>
      }
    >
      <Select
        options={options}
        components={{ Control: CustomInput }}
        autoFocus
        backspaceRemovesValue={false}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        menuIsOpen
        closeMenuOnSelect
        onChange={onSelectChange}
        placeholder="Search..."
        styles={{
          menu: (provided) => ({
            ...provided,
            width: '12rem',
            right: '15%',
          }),
        }}
        tabSelectsValue={false}
        value={value}
      />
    </Dropdown>
  );
};

export default NavAvatar;
