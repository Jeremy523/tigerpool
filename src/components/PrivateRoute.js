import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Utils
import auth from '../utils/auth';

/**
 * @param {Array} roles valid roles for given route
 */
const PrivateRoute = ({ children, roles: roles, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      auth.isLoggedInAs(roles) ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
    }
  />
);

export default PrivateRoute;