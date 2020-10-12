import React from "react";
import { Table } from "react-bootstrap";
import { Task } from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Added on</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      orderBy: ["date", "desc"]
    }
  ])
)(Tasks);
