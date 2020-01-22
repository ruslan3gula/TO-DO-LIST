import React from "react";

export const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li>
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            <h3>{task.date}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
