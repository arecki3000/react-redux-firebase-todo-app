import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import moment from "moment";
import { removeTask } from "../../actions/taskActions";
import { connect } from "react-redux";

const Task = ({ task, removeTask }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };

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
          onClick={() => handleRemove(task)}
        />
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task))
  };
};

export default connect(null, mapDispatchToProps)(Task);
