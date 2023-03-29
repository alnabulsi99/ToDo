import { useState } from "react";
import "./App.css";
import TasksList from "../src/components/TaskList/TaskList";
import AddTask from "../src/components/AddTask/AddTask";
function App() {
  return (
    <div className="App">
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
