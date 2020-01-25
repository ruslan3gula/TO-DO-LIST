import React, { Component } from "react";

export class DeleteList extends Component {
  constructor(props) {
    super(props);
    const tasks = [
      {
        title: "title",
        description: "discription",
        date: "02022020"
      }
    ];
  }

  render() {
    return (
      <div>
        <ul>
          {tasks.map(task => (
            <li>
              <h1>{task.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
