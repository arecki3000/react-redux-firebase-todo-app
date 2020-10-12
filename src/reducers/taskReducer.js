import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Added task");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Error occurred");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Removed task");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Error occurred");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
