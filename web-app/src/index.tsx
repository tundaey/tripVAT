import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import * as theme from './theme';

library.add(faFacebook, faGoogle, faUsers, faTwitter);

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
  input{box-sizing: border-box},
`;

const mountNode = document.getElementById('app');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  mountNode,
);
