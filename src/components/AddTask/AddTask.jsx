import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../../redux/constants";
import styles from "./styles.module.css";

import {RiAddCircleLine} from 'react-icons/ri'

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TASK, payload: task });
    setTask("");
  };

  return (
        <form onSubmit={handleSubmit} className={styles.form}>
              <h1>TO DO LIST</h1>
      <input required value={task} onChange={(e) => setTask(e.target.value)} />
      <button className={styles.addbtn} type="submit"><RiAddCircleLine size={50}/></button>
      
    </form>
  );
};

export default AddTask;
