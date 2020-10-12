export const addTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .add({
        ...task,
        date: new Date()
      })
      .then(() => {
        dispatch({
          type: "ADD_TASK",
          task
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_TASK_ERR",
          err
        });
      });
  };
};

export const removeTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        console.log(task.id);
        dispatch({
          type: "REMOVE_TASK"
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_TASK_ERR",
          err
        });
      });
  };
};
