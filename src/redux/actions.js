import * as CONSTANTS_TASK from "../redux/constants";

export const addTask = (task) => {
  return {
    type: CONSTANTS_TASK.ADD_TASK,
    payload: task,
  };
};

export const toggleTask = (index) => {
  return {
    type: CONSTANTS_TASK.TOGGLE_TASK,
    payload: index,
  };
};

export const deleteTask = (index) => {
  return {
    type: CONSTANTS_TASK.DELETE_TASK,
    payload: index,
  };
};

export const editTask = (index, newName) => {
  console.log(
    "editTask action called with index",
    index,
    "and newName",
    newName
  );
  return { type: CONSTANTS_TASK.EDIT_TASK, payload: { index, newName } };
};
