import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

const Greeting = () => {
  return <div>Hi there!</div>;
};

export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
  </Route>
);