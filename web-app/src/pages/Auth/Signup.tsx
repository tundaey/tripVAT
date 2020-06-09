import React, { useState, FormEvent } from 'react';
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
  // Form,
  RememberSection,
  AuthWrapper,
} from './common';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('email && pass', email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <MarginTop size="small">
        <Input.Email value={email} onChange={setEmail} title="Email address" />
      </MarginTop>
      <MarginTop size="small">
        <Input.Password value={password} onChange={setPassword} title="Password" />
      </MarginTop>
      <MarginTop size="small">
        <RememberSection>
          <Input.Checkbox title="Remember me" />
          <LinkText to="/signup">Forgot your password</LinkText>
        </RememberSection>
      </MarginTop>
      <MarginTop size="small">
        <Button color="primary" full>
          Sign up
        </Button>
      </MarginTop>
    </form>
  );
};

const LoginForm = () => (
  <LoginFormContainer>
    <FormWrapper>
      <MarginTop size="small">
        <FormHeader>
          <Logo>
            <img src={logo} />
          </Logo>
          <Heading>Sign up for an account</Heading>
          <MarginTop size="small">
            <ThinText>Or </ThinText>
            <LinkText to="/login">Log in to your account</LinkText>
          </MarginTop>
        </FormHeader>
      </MarginTop>
      <MarginTop size="medium">
        <Text>Sign up with</Text>
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
        <Form />
      </MarginTop>
    </FormWrapper>
  </LoginFormContainer>
);

const Signup = () => (
  <AuthWrapper>
    <LoginForm />
    <LoginBackground />
  </AuthWrapper>
);

export default Signup;
