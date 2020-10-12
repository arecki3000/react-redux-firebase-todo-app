const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      console.log("added task");
      return state;
    }
    case "ADD_TASK_ERR": {
      console.log("error occurred");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
