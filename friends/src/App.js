import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/login.js";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}

export default App;
