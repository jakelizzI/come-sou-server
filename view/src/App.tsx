import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUIDInputView from "./UUIDInputView";
import ComesouView from "./ComesouView";

const App = () => (
  <Router>
    <Route path="/" component={UUIDInputView} />
    <Route path="/:uuid" component={ComesouView} />
  </Router>
)

export default App;