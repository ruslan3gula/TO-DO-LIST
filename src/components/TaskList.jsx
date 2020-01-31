import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const TaskList = ({ tasks }) => {
  return (
    <div>
      <Link to={"/create-task"}>
        <button>Add tas</button>
      </Link>
      <List>
        {tasks.map(task => (
          <ListItem dense button>
            {task.title}
            {task.description}
            {task.date}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
