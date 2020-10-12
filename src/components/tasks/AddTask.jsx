import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { formStyle } from "../../constants.js";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

const AddTask = ({ addTask }) => {
  const [state, setState] = useState({
    task: "",
    checked: false
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState, task: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.task) {
      addTask(state);
      setState((prevState) => {
        return {
          ...prevState,
          task: ""
        };
      });
    }
  };

  return (
    <div style={formStyle}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="task">
          <Form.Control
            value={state.task}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Add a task"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task))
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
