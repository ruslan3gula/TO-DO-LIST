import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { uuid } from "uuidv4";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <Link to={"/create-task"}>
        <Button variant="outlined" color="primary">
          Add task
        </Button>
      </Link>
      <List>
        {tasks.map((task, key) => (
          <ListItem key={task.id} dense button>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText secondary={key} />
            <ListItemText primary={task.title} />
            <ListItemText secondary={task.description} />
            <ListItemText secondary={task.date} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => deleteTask(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
