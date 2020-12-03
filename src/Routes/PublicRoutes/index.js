import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard/Dashboard";
import { UserLogin } from "../../containers/UserLogin";
import { BrowserRouter as Router } from "react-router-dom";

export default class PublicRoutes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/user/login" component={UserLogin} />
            <Route path="/user/dashboard" component={Dashboard} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </>
    );
  }
}
