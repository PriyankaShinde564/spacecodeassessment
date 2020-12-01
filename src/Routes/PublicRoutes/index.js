import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { UserLogin } from "../../containers/UserLogin";

export default class PublicRoutes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/user/login" component={UserLogin} />
        </Switch>
      </>
    );
  }
}
