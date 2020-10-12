import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import moment from "moment";
import { removeTask, toggleChecked } from "../../actions/taskActions";
import { connect } from "react-redux";

const Task = ({ task, removeTask, toggleChecked }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };

  const handleToggle = (task) => {
    toggleChecked(task);
  };

  return (
    <tr>
      <td>{task.task}</td>
      <td>{moment(task.date.toDate()).calendar()}</td>
      <td style={{ textAlign: "center" }}>
        <CheckCircleOutlinedIcon
          className={task.checked ? "text-success" : "text-muted"}
          style={{ cursor: "pointer" }}
          onClick={() => handleToggle(task)}
        />
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
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task))
  };
};

export default connect(null, mapDispatchToProps)(Task);
