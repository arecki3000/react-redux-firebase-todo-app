import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignIn, SignUp } from "./components/auth";
import { Dashboard } from "./components/dashboard";
import { NavBar } from "./components/layout";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}
