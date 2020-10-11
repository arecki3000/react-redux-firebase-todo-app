import React from "react";
import { AddTask, Tasks } from "../tasks";

export const Dashboard = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 30px" }}>
      <AddTask />
      <Tasks />
    </div>
  );
};
