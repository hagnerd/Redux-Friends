import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";

import Login from "./pages/login.js";
import Dashboard from "./pages/dashboard";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Dashboard} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}

export default App;
