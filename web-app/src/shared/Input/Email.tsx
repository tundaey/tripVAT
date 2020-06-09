import React from 'react';
import InputWrapper from './InputWrapper';
import InputContainer from './InputContainer';

interface IInput {
  title?: string;
  value: string;
  onChange: (value: string) => void;
}

const Email = (props: IInput) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  };
  return (
    <InputContainer>
      <label>{props.title}</label>
      <InputWrapper>
        <input value={props.value} onChange={handleOnChange} type="email" />
      </InputWrapper>
    </InputContainer>
  );
};

export default Email;
