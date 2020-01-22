import TaskForm from "./components/TaskForm";

import "./App.css";

import React, { useState } from "react";
import { TaskList } from "./components/TaskList";

function App() {
  const createTask = newTask => {
    console.log(newTask.title, newTask.description, newTask.date);
  };
  const [tasks, setTasks] = useState([
    {
      title: "title",
      description: "dex",
      date: "09-09-999"
      
    }
  ]);

  return (
    <div className="App">
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
