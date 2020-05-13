import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { FieldScreen } from "@/screens/FieldScreen";
import { NoMatchScreen } from "@/screens/NoMatchScreen";

export const App: React.FC<{}> = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/field">Field</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/field">
          <FieldScreen />
        </Route>
        <Route path="*">
          <NoMatchScreen />
        </Route>
      </Switch>
    </div>
  </Router>
);