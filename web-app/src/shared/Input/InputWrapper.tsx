import styled from 'styled-components';

const InputWrapper = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
    border: 1px solid ${(props) => props.theme.lightGreyBorder};
    border-radius: 0.375rem;
  }
  input:focus {
    box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
    border-color: #a4cafe;
    outline: 0;
  }
`;

export default InputWrapper;
