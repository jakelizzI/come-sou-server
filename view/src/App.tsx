import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UUIDInputView from "./UUIDInputView";
import ComesouView from "./ComesouView";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <UUIDInputView />
      </Route>
      <Route path="/:uuid">
        <ComesouView />
      </Route>
    </Switch>
  </Router>
)

export default App;