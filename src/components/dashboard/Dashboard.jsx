import React from "react";
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";

export const Dashboard = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 30px" }}>
      <AddTask />
      <Tasks />
    </div>
  );
};
