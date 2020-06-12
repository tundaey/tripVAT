import styled from 'styled-components';

interface InputWrapperProps {
  error: string;
}

const InputWrapper = styled.div<InputWrapperProps>`
  box-shadow: ${(props) => (props.error ? 'none' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)')};
  margin-top: 0.25rem;
  border-radius: 0.375rem;
  input {
    @media (min-width: 640px) {
      line-height: 1.25rem;
      font-size: 0.875rem;
    }
    width: 100%;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid ${(props) => (props.error ? props.theme.errorBorder : props.theme.lightGreyBorder)};
    color: ${(props) => (props.error ? props.theme.errorDarkText : 'auto')};
    border-radius: 0.375rem;
  }
  input:focus {
    box-shadow: ${(props) => (props.error ? 'none' : '0 0 0 3px rgba(164, 202, 254, 0.45)')};
    border-color: ${(props) => (props.error ? 'none' : '#a4cafe')};
    outline: 0;
  }
`;

export const ErrorText = styled.p`
  color: #e02424;
  font-size: 0.875rem;
`;

export default InputWrapper;
