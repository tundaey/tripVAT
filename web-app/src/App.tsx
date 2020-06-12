import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Login, Signup } from './pages';
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
      render={({ location }) => (token ? children : <Redirect to={{ pathname: 'login', state: { from: location } }} />)}
    />
  );
};

const PublicRoute = ({ children, ...rest }: RouteProps) => {
  const token = getToken();
  return <Route {...rest} render={({ location }) => (token ? <Redirect to={{ pathname: '/' }} /> : children)} />;
};

const Home = () => <div>Home</div>;

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
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default App;
