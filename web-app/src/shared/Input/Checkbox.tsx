import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  input[type='checkbox'] {
    color: ${(props) => props.theme.primary};
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.lightGreyBorder};
    border-radius: 0.25rem;
  }
  input[type='checkbox']:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
    border-color: #a4cafe;
  }
  label {
    color: ${(props) => props.theme.darkGreyText};
    line-height: 1.25rem;
    font-size: 0.875rem;
    margin-left: 0.5rem;
  }
`;

interface ICheckbox {
  title?: string;
}

const Checkbox = (props: ICheckbox) => {
  return (
    <CheckboxContainer>
      <input type="checkbox" />
      <label>{props.title}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
