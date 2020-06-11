import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import App from './App';
import * as theme from './theme';
import { getToken } from './helpers/locastorage';

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/api/v0',
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

library.add(faFacebook, faGoogle, faUsers, faTwitter, faTimesCircle);

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  body {
    /* font-family: proxima-nova, sans-serif;
    font-weight: 100;
    font-style: normal; */
    font-family: proxima-nova, sans-serif;
    font-weight: 400;
    font-style: normal
  }
  input{box-sizing: border-box}
`;

const mountNode = document.getElementById('app');
ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  mountNode,
);
