import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { formStyle } from "../../constants.js";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div style={formStyle}>
      <Form>
        <legend>
          <h4>Sign In</h4>
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
        <Button
          variant="outline-primary"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
};
