import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={() => "Loading"}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact>
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
