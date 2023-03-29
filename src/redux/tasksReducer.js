import * as CONSTANTS_TASK from "../redux/constants";

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS_TASK.ADD_TASK:
      return [...state, { name: action.payload, done: false }];
    case CONSTANTS_TASK.TOGGLE_TASK:
      return state.map((task, index) =>
        index === action.payload ? { ...task, done: !task.done } : task
      );
    case CONSTANTS_TASK.DELETE_TASK:
      return state.filter((task, index) => index !== action.payload);
    case CONSTANTS_TASK.EDIT_TASK:
      console.log(action.payload)
      return state.map((task, index) =>
        index === action.payload.index
          ? { ...task, name: action.payload.newName }
          : task
      );
    default:
      return state;
  }
};

export default tasksReducer;
