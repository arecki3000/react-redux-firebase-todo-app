import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { formStyle } from "../../constants.js";

export const AddTask = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ task });
    setTask("");
  };

  return (
    <div style={formStyle}>
      <Form>
        <Form.Group controlId="task">
          <Form.Control
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Add a task"
          />
        </Form.Group>
        <Button
          variant="outline-primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </Button>
      </Form>
    </div>
  );
};
