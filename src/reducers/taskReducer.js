import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("added task");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("error occurred");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
