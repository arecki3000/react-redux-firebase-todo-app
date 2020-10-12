import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Added task");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Add Error occurred");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Removed task");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Delete Error occurred");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("Task status changed");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("Toggle Error occurred");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
