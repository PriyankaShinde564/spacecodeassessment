import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard/Dashboard";
import { UserLogin } from "../../containers/UserLogin";
import { BrowserRouter as Router } from "react-router-dom";
import Inventory from "../../containers/Dashboard/Inventory";

export default class PublicRoutes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/user/login" component={UserLogin} />
            <Route path="/" component={Dashboard} />
            <Route exact path="/user/inventory" component={Inventory} />
          </Switch>
        </Router>
      </>
    );
  }
}
