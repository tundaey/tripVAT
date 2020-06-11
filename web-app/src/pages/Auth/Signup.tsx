import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
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

const signupMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
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
  const { register, handleSubmit, errors } = useForm<AuthForm>();
  const [registerUser] = useMutation(signupMutation);
  const [signupError, setSignupError] = useState<Array<string>>([]);
  const onSubmit = (data: AuthForm) => {
    registerUser({
      variables: { email: data.email, password: data.password },
    }).then(({ data: { register: registerResponse } }) => {
      const { message, token, user } = registerResponse;
      if (!token) {
        setSignupError([message]);
        return;
      }
      saveToken(token);
      history.push('/');
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
      {signupError.length > 0 && (
        <MarginTop size="small">
          <Notification title={`There were ${signupError.length} error(s) with your submission`}>
            <ul>
              {signupError.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </Notification>
        </MarginTop>
      )}
      <MarginTop size="small">
        <Button color="primary" type="submit" full>
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

const Signup = () => (
  <AuthWrapper>
    <LoginForm />
    <LoginBackground />
  </AuthWrapper>
);

export default Signup;
