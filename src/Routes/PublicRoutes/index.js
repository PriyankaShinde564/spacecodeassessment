import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard/Dashboard";
import { UserLogin } from "../../containers/UserLogin";

export default class PublicRoutes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/user/login" component={UserLogin} />
          <Route path="/user/dashboard" component={Dashboard} />
        </Switch>
      </>
    );
  }
}
