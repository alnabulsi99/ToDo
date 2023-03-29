import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/actions";
import * as CONSTANTS_TASK from "../../redux/constants";



export default function Task({ task, index }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleToggle = () => {
    dispatch({ type: CONSTANTS_TASK.TOGGLE_TASK, payload: index });
  };

  const handleDelete = () => {
    dispatch({ type: CONSTANTS_TASK.DELETE_TASK, payload: index });
  };

  const handleEditStart = () => {
    setEditMode(true);
  };

  const handleEditCancel = () => {
    setEditMode(false);
    setNewName(task.name);
  };

  const handleEditSave = (e) => {
    console.log(newName);
    e.preventDefault();
    dispatch(editTask(index, newName));
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? (
        <form onSubmit={handleEditSave}>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <button type="submit">Save</button>
          <button onClick={handleEditCancel}>Cancel</button>
        </form>
      ) : (
        <>
          <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.name}
          </span>
          <button onClick={handleToggle}>Done</button>
          <button onClick={handleEditStart}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}
