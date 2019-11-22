import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Utils
import auth from '../utils/auth';

/**
 * @param {Array} roles valid roles for given route
 */
const PrivateRoute = ({ children, roles: roles, redirect: redirect = "/restricted", ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => renderBasedOnLogin(children, roles, redirect, location)}
  />
);

const renderBasedOnLogin = (children, roles, redirect, location) => {
  // no login, back to login
  if (!auth.isLoggedInAtAll()) {
    return (
      <Redirect to={{
        pathname: "/login",
        state: { from: location }
      }} />
    );
  }

  // has proper role, send to page
  if (auth.isLoggedInAs(roles))
    return children;

  // lacks proper role, send to redirect
  return (
    <Redirect to={{
      pathname: redirect,
      state: { from: location }
    }} />
  );
}

export default PrivateRoute;