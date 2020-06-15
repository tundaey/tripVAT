import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Login, Signup, Home, Trips, Events, Refunds } from './pages';
import { Nav } from './shared';
import { getToken } from './helpers/locastorage';

interface RouteProps {
  children: ReactNode;
  path: string;
}

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const token = getToken();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          <>
            <Nav />
            {children}
          </>
        ) : (
          <Redirect to={{ pathname: 'login', state: { from: location } }} />
        )
      }
    />
  );
};

const PublicRoute = ({ children, ...rest }: RouteProps) => {
  const token = getToken();
  return <Route {...rest} render={({ location }) => (token ? <Redirect to={{ pathname: '/' }} /> : children)} />;
};

const AppWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.white};
`;

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <PublicRoute path="/signup">
            <Signup />
          </PublicRoute>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/trips">
            <Trips />
          </PrivateRoute>
          <PrivateRoute path="/refunds">
            <Refunds />
          </PrivateRoute>
          <PrivateRoute path="/events">
            <Events />
          </PrivateRoute>
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default App;
