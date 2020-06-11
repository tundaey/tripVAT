import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import logo from '../../images/logo.svg';
import { Button, Input, MarginTop, MarginRight, Heading, Notification } from '../../shared';
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
  RememberSection,
  AuthWrapper,
} from './common';
import { saveToken } from '../../helpers/locastorage';

type AuthForm = {
  email: string;
  password: string;
};

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      message
      token
      auth
      user {
        email
      }
    }
  }
`;

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const { register, handleSubmit, errors } = useForm<AuthForm>();
  const [login] = useMutation(loginMutation);
  const [loginErrors, setLoginErrors] = useState<Array<string>>([]);
  const onSubmit = (data: AuthForm) => {
    login({
      variables: { email: data.email, password: data.password },
    }).then(({ data: { login: loginResponse } }) => {
      const { message, token, user } = loginResponse;
      if (!token) {
        setLoginErrors([message]);
        return;
      }
      saveToken(token);
      history.replace(from);
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MarginTop size="small">
        <Input.Email errors={errors.email} ref={register({ required: true })} name="email" title="Email address" />
      </MarginTop>
      <MarginTop size="small">
        <Input.Password errors={errors.password} ref={register({ required: true })} name="password" title="Password" />
      </MarginTop>
      <MarginTop size="small">
        <RememberSection>
          <Input.Checkbox title="Remember me" />
          <LinkText to="/signup">Forgot your password</LinkText>
        </RememberSection>
      </MarginTop>
      {loginErrors.length > 0 && (
        <MarginTop size="small">
          <Notification title={`There were ${loginErrors.length} error(s) with your submission`}>
            <ul>
              {loginErrors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </Notification>
        </MarginTop>
      )}
      <MarginTop size="small">
        <Button color="primary" type="submit" full>
          Sign in
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
          <Button type="button" icon={['fab', 'facebook']}></Button>
        </MarginRight>
        <MarginRight>
          <Button type="button" icon={['fab', 'twitter']}></Button>
        </MarginRight>
        <MarginRight>
          <Button type="button" icon={['fab', 'google']}></Button>
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

const Login = () => (
  <AuthWrapper>
    <LoginForm />
    <LoginBackground />
  </AuthWrapper>
);

export default Login;
