import React from "react";
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = ({ uid }) => {
  if (!uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 30px" }}>
      <AddTask />
      <Tasks />
    </div>
  );
};
const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid
  };
};

export default connect(mapStateToProps)(Dashboard);
