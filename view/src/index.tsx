import React from "react";
import ReactDOM from "react-dom";
import ComesouView from "./ComesouView";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ComesouView />, document.getElementById("root"));

serviceWorker.unregister();
