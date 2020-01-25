import React, { Component } from "react";

var tasks = [
  {
    title: "title",
    description: "discription",
    date: "02022020"
  },
  {
    title: "title",
    description: "discription",
    date: "02022020"
  },
  {
    title: "title",
    description: "discription",
    date: "02022020"
  }
];

const mystyle = {
  border: "black solid 1px",
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const deleteTask = index => {
  tasks.splice(index, 1);
};

export const Form = () => (
  <ul>
    {tasks.map((task, index) => (
      <div onClick={deleteTask(index)} style={mystyle}>
        <h1>{task.title}</h1>
      </div>
    ))}
  </ul>
);
