import logo from "./logo.svg";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRoutes from "./Routes/PublicRoutes";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/user" component={PublicRoutes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
