import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { formStyle } from "../../constants.js";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

const AddTask = (props) => {
  const [state, setState] = useState({
    task: "",
    checked: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    props.addTask(state);
    setState((prevState) => {
      return {
        ...prevState,
        task: ""
      };
    });
  };

  return (
    <div style={formStyle}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="task">
          <Form.Control
            value={state.task}
            onChange={(e) => {
              e.persist();
              if (e.target.value) {
                setState((prevState) => {
                  return { ...prevState, task: e.target.value };
                }, console.log(state));
              }
            }}
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
