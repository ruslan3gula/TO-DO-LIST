import TaskForm from "./components/TaskForm";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import React, { useState } from "react";
import { TaskList } from "./components/TaskList";
import { Form2 } from "./components/Form2";

function App() {
  const createTask = newTask => {
    setTasks(oldValue => {
      const newValue = [...oldValue, newTask];
      return newValue;
    });
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
      <Switch>
        <Route exact path="/">
          <TaskList tasks={tasks} />
        </Route>

        <Route path="/create-task">
          <TaskForm createTask={createTask} />
        </Route>
      </Switch>

      {/* <Form2 /> */}
    </div>
  );
}

export default App;
