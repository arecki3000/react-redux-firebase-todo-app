import React from "react";
import { Table } from "react-bootstrap";
import { Task } from "./";

export const Tasks = () => {
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
        <Task />
      </tbody>
    </Table>
  );
};
