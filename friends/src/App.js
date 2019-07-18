import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";

import Login from "./pages/login.js";
import Friends from "./pages/friends";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Friends} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}

export default App;
