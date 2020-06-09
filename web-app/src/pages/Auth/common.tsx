import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthWrapper = styled.div`
  display: flex;
`;

export const LoginFormContainer = styled.div`
  padding-top: 8rem;
  padding-bottom: 3rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 10rem;
    width: 100%;
  }
  @media (min-width: 1280px) {
    padding-left: 6rem;
    padding-right: 6rem;
    width: auto;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 24rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.div`
  img {
    height: 3rem;
  }
`;

export const ThinText = styled.span`
  font-family: proxima-nova, sans-serif;
  font-weight: 100;
  font-style: normal;
`;

export const LinkText = styled(Link)`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

export const FormHeader = styled.div``;
export const LoginSocial = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: 0px;
`;

export const SectionDividerText = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.lightGreyBorder};
  line-height: 0.1em;
  margin: 10px 0 20px;
  color: ${(props) => props.theme.lightGreyText};
  span {
    background: #fff;
    padding: 0 10px;
  }
`;

export const RememberSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form``;
