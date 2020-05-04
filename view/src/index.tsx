import React from "react";
import ReactDOM from "react-dom";
import ComeSouView from "./ComeSouView";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ComeSouView />, document.getElementById("root"));

serviceWorker.unregister();
