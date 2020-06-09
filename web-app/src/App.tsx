import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Login, Signup } from './pages';

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default App;
