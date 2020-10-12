import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { formStyle } from "../../constants.js";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

const AddTask = (props) => {
  const [state, setState] = useState({
    task: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(state);
    console.log(state);
    setState((prevState) => {
      return {
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
                  return { task: e.target.value };
                });
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
