import React from "react";

const TaskForm = ({ createTask }) => {
  const myHandler = event => {
    createTask({
      title: taskTitle,
      description: taskDescription,
      date: taskDate
    });

    event.preventDefault();
  };
  const [taskTitle, setTaskTitle] = React.useState();
  const [taskDescription, setTaskDescription] = React.useState();
  const [taskDate, setTaskDate] = React.useState();
  return (
    <div>
      <form onSubmit={myHandler}>
        <input
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

        <input
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
        <input
          onChange={event => {
            event.persist();
            setTaskDate(() => {
              return event.target.value;
            });
          }}
          id="date"
          defaultValue={taskDate}
          label="Date"
          type="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
