import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/private-route";

import Login from "./pages/login.js";
import Friends from "./pages/friends";
import NoMatch from "./pages/no-match";
import Navigation from "./components/navigation";
import "./styles.css";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen h-full">
      <Navigation />
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" component={Friends} />
          <Route exact path="/" render={() => <Redirect to="/friends" />} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
