import React from "react";
import { Table } from "react-bootstrap";
import Task from "./Task";
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
  const tasks = state.firestore.ordered.tasks;
  const uid = state.firebase.auth.uid;
  return {
    tasks: tasks,
    uid: uid
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"]
    }
  ])
)(Tasks);
