import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: ${(props) => props.theme.darkGreyText};
    line-height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export default InputContainer;
