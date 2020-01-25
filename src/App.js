import TaskForm from "./components/TaskForm";

import "./App.css";

import React, { useState } from "react";
import { TaskList } from "./components/TaskList";
import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";

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
      <Form />
      <Form2 />
    </div>
  );
}

export default App;
