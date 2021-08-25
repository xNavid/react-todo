import React from "react";
import { Redirect, Route } from "react-router-dom";

function isLoggedIn() {
  try {
    if (localStorage.getItem("user")) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
