import React from 'react';
import InputWrapper, { ErrorText } from './InputWrapper';
import InputContainer from './InputContainer';
import { IInput } from './IInput';

const Email = (props: IInput, ref: any) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(e.currentTarget.value);
  };
  return (
    <InputContainer>
      <label>{props.title}</label>
      <InputWrapper error={props.errors}>
        <input name={props.name} ref={ref} value={props.value} onChange={handleOnChange} type="email" />
        {props.errors && props.errors.type === 'required' && (
          <ErrorText>{`Your must enter your ${props.name}.`}</ErrorText>
        )}
      </InputWrapper>
    </InputContainer>
  );
};

export default React.forwardRef(Email);
