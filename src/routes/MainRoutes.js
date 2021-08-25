import React, { Fragment } from "react";
import { Router, Route, withRouter, Switch } from "react-router-dom";
import Login from "../components/Login";
import { Dashboard } from "../components/Dashboard";
import history from "./history";
import PrivateRoute from "./PrivateRoutes";
import Navbar from "../components/Navbar";
window.routerHistory = history;

const MainRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={withRouter(Login)} />
        <Route exact path="/login" component={withRouter(Login)} />
        <Fragment>
          <Navbar />
          <PrivateRoute path={`/dashboard`} component={withRouter(Dashboard)} />
        </Fragment>

        {/* <Route path="*" component={Page404} /> */}
      </Switch>
    </Router>
  );
};

export default MainRoutes;
