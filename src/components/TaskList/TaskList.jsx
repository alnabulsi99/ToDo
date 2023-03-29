import { useSelector } from "react-redux";
import Task from "../task/Task";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
console.log(tasks)
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </ul>
  );
};

export default TasksList;
