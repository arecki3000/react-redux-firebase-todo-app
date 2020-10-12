import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { formStyle } from "../../constants.js";
import { signUp } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SignUp = ({ signUp, uid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password });
    setEmail("");
    setPassword("");
  };

  if (uid) {
    return <Redirect to="/" />;
  }

  return (
    <div style={formStyle}>
      <Form onSubmit={handleSubmit}>
        <legend>
          <h4>Sign Up</h4>
        </legend>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
