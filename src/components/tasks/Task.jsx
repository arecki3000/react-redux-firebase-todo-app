import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

export const Task = () => {
  return (
    <tr>
      <td>Lorem, ipsum dolor.</td>
      <td>2020-09-10</td>
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
