import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import moment from "moment";

export const Task = ({ task }) => {
  return (
    <tr>
      <td>{task.task}</td>
      <td>{moment(task.date.toDate()).calendar()}</td>
      <td style={{ textAlign: "center" }}>
        <CheckCircleOutlinedIcon style={{ cursor: "pointer" }} />
      </td>

      <td style={{ textAlign: "center" }}>
        <DeleteForeverOutlinedIcon
          style={{ cursor: "pointer" }}
          className="text-danger"
        />
      </td>
    </tr>
  );
};
