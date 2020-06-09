import styled from 'styled-components';
import loginBg from '../../images/login-background.jpeg';

const LoginBackground = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100vh;
`;

export default LoginBackground;
