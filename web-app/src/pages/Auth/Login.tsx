import React from 'react';
import logo from '../../images/logo.svg';
import { Button, Input, MarginTop, MarginRight, Heading } from '../../shared';
import LoginBackground from './LoginBackground';
import {
  LoginFormContainer,
  FormWrapper,
  FormHeader,
  Logo,
  ThinText,
  LinkText,
  LoginSocial,
  SectionDividerText,
  Text,
  Form,
  RememberSection,
  AuthWrapper,
} from './common';

const LoginForm = () => (
  <LoginFormContainer>
    <FormWrapper>
      <MarginTop size="small">
        <FormHeader>
          <Logo>
            <img src={logo} />
          </Logo>
          <Heading>Sign in to your account</Heading>
          <MarginTop size="small">
            <ThinText>Or </ThinText>
            <LinkText to="/signup">start your 14-day free trial</LinkText>
          </MarginTop>
        </FormHeader>
      </MarginTop>
      <MarginTop size="medium">
        <Text>Sign in with</Text>
      </MarginTop>
      <LoginSocial>
        <MarginRight>
          <Button icon={['fab', 'facebook']}></Button>
        </MarginRight>
        <MarginRight>
          <Button icon={['fab', 'twitter']}></Button>
        </MarginRight>
        <MarginRight>
          <Button icon={['fab', 'google']}></Button>
        </MarginRight>
      </LoginSocial>
      <MarginTop size="medium">
        <SectionDividerText>
          <span>Or continue with</span>
        </SectionDividerText>
      </MarginTop>
      <MarginTop size="medium">
        <Form>
          <MarginTop size="small">
            <Input.Email title="Email address" />
          </MarginTop>
          <MarginTop size="small">
            <Input.Password title="Password" />
          </MarginTop>
          <MarginTop size="small">
            <RememberSection>
              <Input.Checkbox title="Remember me" />
              <LinkText to="/signup">Forgot your password</LinkText>
            </RememberSection>
          </MarginTop>
          <MarginTop size="small">
            <Button color="primary" full>
              Sign in
            </Button>
          </MarginTop>
        </Form>
      </MarginTop>
    </FormWrapper>
  </LoginFormContainer>
);

const Login = () => (
  <AuthWrapper>
    <LoginForm />
    <LoginBackground />
  </AuthWrapper>
);

export default Login;
