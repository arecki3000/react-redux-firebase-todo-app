import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignIn, SignUp } from "./components/auth";
import { Dashboard } from "./components/dashboard";
import { NavBar } from "./components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Router>
        <ToastContainer />
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
