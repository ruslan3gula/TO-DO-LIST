import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { uuid } from "uuidv4";

const TaskForm = ({ createTask }) => {
  const myHandler = event => {
    const newTask = {
      id: uuid(),
      title: taskTitle,
      description: taskDescription,
      date: taskDate
    };
    createTask(newTask);

    event.preventDefault();

    // read https://developer.mozilla.org/ru/docs/Web/API/Window
    // and https://developer.mozilla.org/ru/docs/Web/API/History
    window.history.back();
  };
  const [taskTitle, setTaskTitle] = React.useState();
  const [taskDescription, setTaskDescription] = React.useState();
  const [taskDate, setTaskDate] = React.useState();
  return (
    <div>
      <form onSubmit={myHandler}>
        <TextField
          variant="outlined"
          placeholder="Add todo"
          margin="normal"
          onChange={event => {
            event.persist();
            setTaskTitle(() => {
              return event.target.value;
            });
          }}
          id="title"
          defaultValue={taskTitle}
          label="Title"
        />

        <TextField
          variant="outlined"
          placeholder="Description"
          margin="normal"
          onChange={event => {
            event.persist();
            setTaskDescription(() => {
              return event.target.value;
            });
          }}
          id="description"
          defaultValue={taskDescription}
          label="Description"
        />
        <TextField
          variant="outlined"
          margin="normal"
          onChange={event => {
            event.persist();
            setTaskDate(() => {
              return event.target.value;
            });
          }}
          id="date"
          defaultValue={taskDate}
          type="date"
        />

        <Button variant="outlined" type="submit">
          Default
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
