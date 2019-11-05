import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Utils
import auth from '../utils/auth';

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      auth.getToken() !== null ? (
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